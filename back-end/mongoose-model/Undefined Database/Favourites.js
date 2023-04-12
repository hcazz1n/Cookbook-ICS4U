var Favourites = new Schema({
    isFavourite: {
        type: Boolean
    },
    favRecipes: [
        {
            type: Schema.Types.ObjectId
        }
    ]
});