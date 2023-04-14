const mongoose = require('mongoose');

const connectionString = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`

mongoose.connect(connectionString,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>console.log('Database Connected')).catch((err)=>console.log(err));