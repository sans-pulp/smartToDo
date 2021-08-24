const express = require('express');
const router = express.Router();
const { getAllBooks, addBook } = require('../db/queries/book-queries');

module.exports = (db) => {
  // GET /books
  router.get("/", (req, res) => {
    getAllBooks()
      .then(books => {
        res.json(books);
      });

  });
  return router;
};
