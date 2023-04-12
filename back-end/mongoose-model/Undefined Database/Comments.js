var Comments = new Schema({
    comments: [
        {
            type: String
        }
    ],
    postID: {
        type: Schema.Types.ObjectId
    },
    userID: {
        type: Schema.Types.ObjectId
    }
});