const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
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
    ]
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;