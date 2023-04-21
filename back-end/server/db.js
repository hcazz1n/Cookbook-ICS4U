const mongoose = require('mongoose');
require('dotenv').config();

const connectionString = `mongodb+srv://fredhe56:ieatdogs69420@datacool.sduylk1.mongodb.net/cookbook?retryWrites=true&w=majority`

mongoose.connect(connectionString,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>console.log('Database Connected')).catch((err)=>console.log(err));