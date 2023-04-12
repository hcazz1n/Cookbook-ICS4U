var Rating = new Schema({
    rating: {
        type: Number
    },
    userID: {
        type: Schema.Types.ObjectId
    },
    postID: {
        type: Schema.Types.ObjectId
    }
});