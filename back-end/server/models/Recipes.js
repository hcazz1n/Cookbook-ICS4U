const mongoose = require('mongoose')

const recipeSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    author: {
        type: String,
    },
    ingredients: [
        {
        type: String,
        },
    ],
    images: {
        type: String,
    },
    isDessert: {
        type: String,
    },
    instructions: [
        {
            type: String,
        }
    ]
});

const Recipe = mongoose.model('Recipe', recipeSchema)

module.exports = Recipe
