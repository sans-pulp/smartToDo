/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const { getUserByEmail, addUser } = require('../db/queries/users-queries');
module.exports = (db) => {

  // Login Page GET Route
  router.get("/login", (req, res) => {
    res.render("todo_login");
  });
  // Login Page POST Route
  router.post('/login', (req, res) => {
    const { email, password } = req.body;
    getUserByEmail(email)
      .then(user => {
        if (password === user.password) {
          //push user object into templateVars, target those variables in index.ejs (Profile card)
          //fire off a db query to books/movies, etc to retrieve all user lists. pass those into templateVars..
          req.session.user_id = user;
          res.redirect('/');
        }
      })
      .catch(err => {
        console.log('error:', err.message);
      });
    //console.log(user);
  });
  // Logout POST Route
  router.post('/logout', (req, res) => {
    console.log(req.body);
    req.session = null;
    res.redirect('/');
  });
  // Register Page GET Route
  router.get("/register", (req, res) => {
    res.render("todo_register");
  });
  //Register Page POST Route
  router.post("/register", (req, res) => {
    console.log(req.body);
    const {name, email, password} = req.body;
    addUser(name, email, password)
      .then((response) => {
        res.redirect('/login');
      });
  });
  // User Page
  router.get("/", (req, res) => {
    db.query(`SELECT * FROM users;`)
      .then(data => {
        const users = data.rows;
        console.log(users);
        res.render("index");
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  return router;
};
