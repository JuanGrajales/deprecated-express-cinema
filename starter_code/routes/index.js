const express = require('express');
const router  = express.Router();
// import Movie model
const Book = require('../models/Movie'); 

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/', (req, res, next) => {
  Movie.find()
  .then((allTheMovies)=>{
    res.render('movie-views/bunchaBooks', {theBooks: allThebooks});
  })
  .catch((err)=>{
    next(err);
  })
});

module.exports = router;
