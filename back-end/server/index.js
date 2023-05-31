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
  res.render('index.ejs')
})
app.get('/login', (req, res) => {
  res.render('login.ejs')
})
app.get('/register', (req, res) => {
  res.render('register.ejs')
})

app.get('/search', (req, res) => {
  res.render('search.ejs')
})

app.post('/search', async function (req, res) {
  console.log(req.body.search)

  try {
    Recipe.find({ name: capitalizeFirst(req.body.search) }).then((recipes) => {
      console.log(recipes)
      res.send(recipes)
    })
  } catch (err) {
    res.status(500).json({ errors: 'No recipe' })
  }
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
            name: req.body.name,
            userName: req.body.Username,
            password: hash,
            isAdmin: true,
            bio: req.body.description,
          })
          res.send(user)
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
      name: capitalizeFirst(req.body.name),
      author: req.body.author,
      description: req.body.description,
      ingredients: req.body.ingredients.split(', '),
      keywords: req.body.keywords.split(', '),
      images: req.body.images.split(', '),
      isDessert: req.body.isDessert.value,
    }

    const recipe = await Recipe.create(data)
    res.send(recipe)
  } catch (err) {
    res.status(500).send(err.message)
  }
})

app.get('/api/recipes', async (req, res) => {
  try {
    const recipes = await Recipe.find({})
    res.json(recipes)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

//Port info
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

// other functions

//capitalize first letter of each word unless it is an article
function capitalizeFirst(str) {
  const articles = ['a', 'an', 'the', 'and'] //articles (words that are meant to be left non-capitalized)
  const words = str.toLowerCase().split(' ')

  //capitalize the first letter of each word, except for the articles
  var capWrd = words.map((word, index) => {
    if (index === 0) {
      return word.charAt(0).toUpperCase() + word.slice(1)
    } else if (index === 0 || !articles.includes(word.toLowerCase())) {
      return word.charAt(0).toUpperCase() + word.slice(1)
    } else if (articles.includes(word.toLowerCase())) {
      return word.charAt(0).toLowerCase() + word.slice(1)
    } else {
      return word.toLowerCase()
    }
  })

  const capStr = capWrd.join(' ')

  return capStr
}

console.log(capitalizeFirst('Fig And cheese'))
console.log(capitalizeFirst('the BIG fast GUY AN rAn'))
