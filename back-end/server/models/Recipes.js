const mongoose = require('mongoose')

const recipeSchema = new mongoose.Schema({
    Recipes: [
        {
            type: String
        }
    ],
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
    ]
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;