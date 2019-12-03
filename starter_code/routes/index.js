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

router.post('/create-the-book', (req, res, next)=>{
  let theTitle = req.body.newMovieTitle;
  let theDirector = req.body.newMovieDirector;
  let img = req.body.img;

  Book.create({
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
