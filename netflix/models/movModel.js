const mongoose = require('mongoose')
const movieSchema = mongoose.Schema(
    {
        movie_title : String,
        movie_description : String,
        movie_genre : String,
        release_year : Date,
        movie_rating : Number,
        movie_language : String,
        movie_cast : String
    }
)

module.exports = mongoose.model('Movies',movieSchema)