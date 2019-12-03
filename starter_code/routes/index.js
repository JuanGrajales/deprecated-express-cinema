const express = require('express');
const router  = express.Router();
// import Movie model
const Movie = require('../models/Movie'); 

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

// // is this posting to the database
router.post('/create-the-movie', (req, res, next)=>{
  let theTitle = req.body.newMovieTitle;
  let theDirector = req.body.newMovieDirector;
  let img = req.body.img;

  Movie.create({
    title: theTitle,
    director: theDirector,
    image: img
  })
  .then((response)=>{
    res.redirect('/')
  })
  .catch((err)=>{
    next(err)
  })
})

module.exports = router;
