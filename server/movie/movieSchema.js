var mongoose = require('mongoose');

// Define our movie schema
var Movie   = new mongoose.Schema({
    title: String,
    summary: String,
    rating: String,
    releaseYear: Number,
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

// Export the Mongoose model
module.exports = mongoose.model('Movie', Movie);