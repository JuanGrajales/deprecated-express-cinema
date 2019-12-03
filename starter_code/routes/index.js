const express = require('express');
const router  = express.Router();
// import Movie model
const Book = require('../models/Movie'); 

/* GET home page */
router.get('/', (req, res, next) => {
  Movie.find()
  .then((allTheMovies)=>{
    res.render('movie-views/allMovies');
  })
  .catch((err)=>{
    next(err);
  })
});

// Get the page that will show you the form to add a new movie
router.get('/add-new-movie', (req, res, next)=>{
  res.render('movie-views/newMovie');
})

module.exports = router;
