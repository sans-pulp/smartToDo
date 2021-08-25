const express = require('express');
const router = express.Router();
const { getAllBooks, getBooksByUserId ,addBook, deleteBookById } = require('../db/queries/book-queries');

module.exports = (db) => {
  // GET /books
  router.get("/", (req, res) => {
    getAllBooks()
      .then(books => {
        res.json(books);
      });
  });

  router.get("/:id", (req, res) => {
    const userId = req.session.user_id;
    getBooksByUserId(userId)
      .then(book => {
        res.json(book);
      });
  });

  router.post("/new", (req, res) => {
    console.log(req.body);
    const bookObj = req.body;
    addBook(bookObj)
      .then(() => {
        res.json({success: true});
      });
  });

  router.delete("/:id", (req, res) => {
    console.log(req.params);
    const id = req.params.id;
    deleteBookById(id)
      .then(() => {
        res.json({sucess: true});
      });
  });
  return router;
};
