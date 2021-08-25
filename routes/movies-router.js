const express = require('express');
const router = express.Router();
const { getAllMovies, getMoviesByUserId, addMovie, deleteMovieById } = require('../db/queries/movies-queries');

module.exports = (db) => {
  //GET /movies
  router.get("/", (req, res) => {
    getAllMovies()
      .then(movies => {
        res.json(movies);
      });
  });

  router.get("/:id", (req, res) => {
    const userId = req.session.user_id;
    getMoviesByUserId(userId)
      .then(movies => {
        res.json(movies);
      });
  });

  router.post("/new", (req, res) => {
    console.log(req.body);
    const movieObj = req.body;
    addMovie(movieObj)
      .then(() => {
        res.json({success: true});
      });
  });

  router.delete("/:id", (req, res) => {
    console.log(req.params);
    const id = req.params.id;
    deleteMovieById(id)
      .then(() => {
        res.json({success: true});
      });
  });
  return router;

};
