const mongoose = require('mongoose')

const favouritesSchema = new mongoose.Schema({
    isFavourite: {
        type: Boolean
    },
    favRecipes: [
        {
            type: Schema.Types.ObjectId
        }
    ]
});

const Favourite = mongoose.model('Favourite', favouritesSchema);

module.exports = Favourite;