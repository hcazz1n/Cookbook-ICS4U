const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    userName: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        required: true,
    },
    profilePic: {
        type: String,
    },
    bio: {
        type: String,
        required: true,
    },
    favouriteRecipes: [
        {
            type: String,
        }
    ]
});

const User = mongoose.model('User', userSchema);

module.exports = User;