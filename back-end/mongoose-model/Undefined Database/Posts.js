var Posts = new Schema({
    date: {
        type: Date
    },
    title: {
        type: String
    },
    keyword: [
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
    postID: {
        type: Schema.Types.ObjectId
    }
});