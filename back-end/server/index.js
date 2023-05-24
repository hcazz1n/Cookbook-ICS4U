//Setup
const express = require('express')
const session = require('express-session')
const bcrypt = require('bcrypt')
const saltRounds = 10
const passport = require('./passport/setup')
const LocalStrategy = require('passport-local').Strategy
const cors = require('cors')
const bodyParser = require('body-parser')
const MongoStore = require('connect-mongo')
const mongoose = require('mongoose')
const db = require('./db')
const auth = require('./routes/auth')
const User = require('./models/Users')
const Recipe = require('./models/Recipes')
const Rating = require('./models/Rating')
const Post = require('./models/Posts')
const Favourite = require('./models/Favourites')
const Comments = require('./models/Comments')
const { hashSync } = require('bcryptjs')
const connectEnsureLogin = require('connect-ensure-login')

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.set('view-engine', 'ejs')
app.set('views', '../views')
app.use(express.urlencoded({ extended: false }))
app.use(
  session({
    secret: 'secret',
    store: MongoStore.create({
      mongoUrl:
        'mongodb+srv://fredhe56:ieatdogs69420@datacool.sduylk1.mongodb.net/cookbook?retryWrites=true&w=majority',
    }),
    resave: false,
    saveUninitialized: true,
  })
)

app.use(passport.initialize())
app.use(passport.session())

app.post('/login', (req, res, next) => {
  if (req.isAuthenticated()) {
    res.send('you are already logged in')
  } else {
    passport.authenticate('local', function (err, user, info) {
      if (err) {
        console.log(err)
        return res.status(400).json({ errors: err })
      }
      if (!user) {
        return res.status(400).json({ errors: 'No user found' })
      }
      req.logIn(user, function (err) {
        if (err) {
          return res.status(400).json({ errors: err })
        }
        console.log(user.id)
        return res.status(200).render('index.ejs')
      })
    })(req, res, next)
  }
})

//Login and Register endpoints
app.get('/', (req, res) => {
  console.log(4)
  res.render('index.ejs')
})
app.get('/login', (req, res) => {
  res.render('login.ejs')
})
app.get('/register', (req, res) => {
  res.render('register.ejs')
})

app.get('/logout', function (req, res) {
  req.logout(function (err) {
    if (err) {
      return next(err)
    }
    console.log('logged out')
    res.redirect('/')
  })
})

app.get('/secret', (req, res) => {
  if (req.isAuthenticated()) {
    res.render('secret.ejs')
  } else {
    res.redirect('/')
  }
})

//Creates a new user per registration
app.post('/register', (req, res) => {
  try {
    bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
      User.findOne({ name: req.body.Username })
        .then((existUser) => {
          if (existUser.name === req.body.Username) {
            res.status(500).json({ errors: 'Username already exists' })
          }
        })
        .catch((err) => {
          const user = User.create({
            name: req.body.Username,
            password: hash,
            isAdmin: true,
            bio: req.body.description,
          })
        })
    })
  } catch (err) {
    res.status(500).send(err.message)
  }
})
//Gets all users//
app.get('/api/users', async (req, res) => {
  try {
    const users = await User.find({})
    res.json(users)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})
//Gets user by id//
app.get('/api/users/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
    res.json(user)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

// Recipe methods
app.get('/recipe', (req, res) => {
  console.log('zzzzz')
  res.render('recipemaker.ejs')
})

app.post('/recipe', async (req, res) => {
  try {
    console.log(req.body)
    const data = {
      name: req.body.name,
      author: req.body.author,
      description: req.body.description,
      ingredients: req.body.ingredients.split(', '),
      keywords: req.body.keywords.split(', '),
      images: req.body.images.split(', '),
    }

    const recipe = await Recipe.create(data)
    res.send(recipe)
  } catch (err) {
    res.status(500).send(err.message)
  }
})

//Port info
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
