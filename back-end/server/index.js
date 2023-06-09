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
var ObjectId = require('mongodb').ObjectID
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
        return res.json(user)
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
    Recipe.find({ name: { $regex: req.body.search, $options: 'i' } }).then(
      (recipes) => {
        console.log(recipes)
        res.send(recipes)
      }
    )
  } catch (err) {
    res.status(500).json({ errors: 'No recipe' })
  }
})
app.get('/logout', function (req, res) {
  req.logout(function (err) {
    if (err) {
      return err
    }
    res.send('logout')
  })
})
app.get('/secret', (req, res) => {
  if (req.isAuthenticated()) {
    res.render('secret.ejs')
  } else {
    res.redirect('/')
  }
})

app.get('/update', (req, res) => {
  res.render('update.ejs')
})

//Creates a new user per registration
app.post('/register', (req, res) => {
  try {
    bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
      User.findOne({ userName: req.body.userName })
        .then((existUser) => {
          console.log('hello1')
          if (existUser.userName === req.body.userName) {
            res.status(500).json({ errors: 'Username already exists' })
            //get front end to display text
          }
        })
        .catch((err) => {
          let admin
          if (
            req.body.userName === 'Cookbook' &&
            req.body.password === 'Cookbook'
          )
            admin = true
          else admin = false
          const user = User.create({
            name: req.body.name,
            userName: req.body.userName,
            password: hash,
            isAdmin: admin,
            profilePic: req.body.profilePic,
            bio: req.body.bio,
            favouriteRecipes: [],
          }).then((response) => {
            console.log(response)
            res.json(response)
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

app.get('/api/recipes/:id', async (req, res)=>{
  try{
    const recipe = await Recipe.findById(req.params.id)
    res.json(recipe);
  }catch(err){
    res.status(500).json({error: err.message})
  }
})

app.delete('/api/recipes/:id', async (req, res) => {
  try {
    const recipeId = req.params.id
    const result = await Recipe.deleteOne({_id: recipeId})
    console.log(result)
  } catch (error) {
    res.status(500).send(error.message)
  }
})

app.put('/api/users/:id', async (req, res) => {
  const userId = req.params.id
  try{
    const result = await User.updateOne(
      { _id: userId },
      { $push: { favouriteRecipes: [req.body.favouriteRecipe] } }
    )
    console.log(result)
  }catch(err){
    console.log(err)
  }
})

// Recipe methods
app.get('/addrecipe', (req, res) => {
  console.log('zzzzz')
  res.render('recipemaker.ejs')
})
app.post('/addrecipe', async (req, res) => {
  console.log(req.body)
  console.log(req.body.ingredients.split(', '))
  console.log(req.body.instructions)
  try {
    const data = {
      name: capitalizeFirst(req.body.name),
      author: req.body.author,
      ingredients: req.body.ingredients.split(', '),
      images: req.body.images,
      instructions: req.body.instructions.split(/\r?\n/), //splits the parsed new line
    }
    const recipe = await Recipe.create(data)
    console.log('made it')
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
