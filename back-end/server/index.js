//Setup
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const db = require('./db');
const User = require('./models/Users')
const Recipe = require('./models/Recipes')
const Rating = require('./models/Rating')
const Post = require('./models/Posts')
const Favourite = require('./models/Favourites')
const Comments = require('./models/Comments')

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.set('view-engine', 'ejs');
app.set('views', '../views')
app.use(express.urlencoded({ extended: false }));

//Login and Register endpoints
app.get('/', (req, res) => {
    res.render('register.ejs')
});

app.get('/login', (req, res) => {
    res.render('login.ejs');
});

app.get('/register', (req,res)=>{
    res.render('register.ejs')

    console.log(db.users.find( { "isAdmin": true } ));
})

app.post('/login', async (req, res) => {
    //Get user information, if info = input, login
});

//Creates a new user per registration
app.post('/register', async (req, res) => {
    try{
    console.log(req.body);
    const data = {
        name: req.body.Username,
        password: req.body.password,
        isAdmin: true,
        bio: req.body.description
    }
    const user = await User.create(data)

    res.redirect('/login');


    //Authentication here if preexisting user -> prompt login
    }catch(err){
        res.status(500).send(err.message)
    }
});

//Gets all users//
app.get('/api/users', async(req, res)=>{
    try{
        const users = await User.find({});
        res.json(users);
    }catch(err){
        res.status(500).json({error: err.message});
    }
})

//Gets user by id//
app.get('/api/users/:id', async(req, res)=>{
    try{
        const user = await User.findById(req.params.id);
        res.json(user);
    }catch(err){
        res.status(500).json({error:err.message})
    }
})


//Port info
const PORT = process.env.PORT||3000;

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
})


