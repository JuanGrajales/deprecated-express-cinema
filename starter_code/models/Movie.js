const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const movieSchema = new Schema({
    title: {type: String},
    Director: String,
    // shorthand  ^ and regular version 
    image: String
})

const Movie = mongoose.model("Movie", movieSchema)
// name of the model should ALWAYS be capitalized and ALWAYS be singular
// this will create a collection called 'books'


module.exports = Movie;