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
  description: {
    type: String,
  },
  keywords: [
    {
      type: String,
    },
  ],
  images: {
    type: String,
  },
  isDessert: {
    type: Boolean,
  },
})

const Recipe = mongoose.model('Recipe', recipeSchema)

module.exports = Recipe
