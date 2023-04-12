var Recipes = new Schema({
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