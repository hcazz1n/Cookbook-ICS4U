const mongoose = require('mongoose')

const commentsSchema = new mongoose.Schema({
    comments: [
        {
            type: String
        }
    ]
});

const Comment = mongoose.model('Comments', commentsSchema);

module.exports = Comment;