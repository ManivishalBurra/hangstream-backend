const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
        movieName:String,
        banner:String,
        movieUrl:String
    });

module.exports = mongoose.model('Movie',movieSchema,"Movie")