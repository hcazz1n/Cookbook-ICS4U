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

const ejs = require('ejs')

//*Link MongoDB database here maybe?

app.set('view-engine', 'ejs');
app.set('views', '../views')
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.render('register.ejs')
});

app.get('/login', (req, res) => {
    res.render('./views/login.ejs');
});

app.get('/register', (req,res)=>{
    res.render('./views/register.ejs')
})

app.post('/login', async (req, res) => {

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

    res.send(user);
    }catch(err){
        res.status(500).send(err.message)
    }
});



const PORT = process.env.PORT||3000;

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
})

/*User endpoints*/

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

//Creates a new user//
app.post('/api/users', async(req, res)=>{
    try{
        const user = new User(req.body);
        await user.save();
        res.json(user)
    }catch(err){
        res.status(500).json
    }
})

