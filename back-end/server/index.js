const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const db = require('./db');
const User = require('./models/Users')

const app = express();

app.use(cors());
app.use(bodyParser.json());

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
 
const PORT = process.env.PORT||5000;

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
})

