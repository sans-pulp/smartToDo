/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();

module.exports = (db) => {

  // Login Page GET Route
  router.get("/login", (req, res) => {
    res.render("todo_login");
  });
  // Login Page POST Route

  // Logout POST Route

  // Register Page GET Route
  router.get("/register", (req, res) => {
    res.render("todo_register");
  });
  //Register Page POST Route

  // User Page
  router.get("/:user", (req, res) => {
    db.query(`SELECT * FROM users;`)
    .then(data => {
      const users = data.rows;
      console.log(users)
      res.render("dash");
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  return router;
};
