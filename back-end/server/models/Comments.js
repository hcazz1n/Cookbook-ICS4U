const mongoose = require('mongoose')

const commentsSchema = new mongoose.Schema({
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

const Comment = mongoose.model('Comments', commentsSchema);

module.exports = Comment;