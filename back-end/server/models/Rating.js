const mongoose = require('mongoose')

const ratingSchema = new mongoose.Schema({
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

const Rating = mongoose.model('Rating', ratingSchema);

module.exports = Rating;