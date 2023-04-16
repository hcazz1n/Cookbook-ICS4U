const mongoose = require('mongoose')

const recipeSchema = new mongoose.Schema({
    Recipes: [
        {
            type: String
        }
    ],
    userID: {
        type: Schema.Types.ObjectId
    },
    recipeID: {
        type: Schema.Types.ObjectId
    },
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