const mongoose = require('mongoose')

const Posts = new mongoose.Schema({
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

const Post = mongoose.model('Post', postSchema);

module.exports = Post;