const mongoose = require('mongoose')

const ratingSchema = new mongoose.Schema({
    rating: {
        type: Number
    }
});

const Rating = mongoose.model('Rating', ratingSchema);

module.exports = Rating;