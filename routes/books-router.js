const express = require('express');
const router = express.Router();
const { getAllBooks, getBooksByUserId ,addBook } = require('../db/queries/book-queries');

module.exports = (db) => {
  // GET /books
  router.get("/", (req, res) => {
    getAllBooks()
      .then(books => {
        res.json(books);
      });

  });
  //how would I get books by the userID and show on index?? I have the query, can i use req.session?
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


  return router;
};
