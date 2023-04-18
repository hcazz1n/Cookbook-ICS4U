const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const db = require('./server/db');


const app = express();

app.use(cors());
app.use(bodyParser.json());

const ejs = require('ejs')
const Users = require('./server/models/Users');

app.use(bodyParser.json());
//*Link MongoDB database here maybe?

app.set('view-engine', 'ejs');
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.render('register.ejs')
});

app.get('/login', (req, res) => {
    res.render('login.ejs');
});

app.get('/register', (req,res)=>{
    res.render('register.ejs')
})

app.post('/login', async (req, res) => {

});

//Gets all users//
app.get('/api/users', async(req, res)=>{
    try{
        const users = await Users.find({});
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
    const user = await Users.create(data)

    res.send(user);
    }catch(err){
        res.status(500).send(err.message)
    }
});



const PORT = process.env.PORT||3000;

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
})