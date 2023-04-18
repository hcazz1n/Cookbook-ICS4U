const mongoose = require('mongoose')

const favouritesSchema = new mongoose.Schema({
    isFavourite: {
        type: Boolean
    },
    favRecipes: [
        {
        }
    ]
});

const Favourite = mongoose.model('Favourite', favouritesSchema);

module.exports = Favourite;