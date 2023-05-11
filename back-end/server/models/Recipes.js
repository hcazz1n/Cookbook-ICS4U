const mongoose = require('mongoose')

const recipeSchema = new mongoose.Schema({
    ingredients: {
        type: String
    },
    description: {
        type: String
    },
    images: [
        {
            type: String
        }
    ],
    keywords: [
        {
            type: String
        }
    ]
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;