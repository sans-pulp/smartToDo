/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const { getUserByEmail, getUserById, addUser } = require('../db/queries/users-queries');
module.exports = (db) => {
  // Login Page POST Route
  router.post('/login', (req, res) => {
    const { email, password } = req.body;
    getUserByEmail(email)
      .then(user => {
        if (password === user.password) {
          req.session.user_id = user.id;
          res.redirect('/');
        } else {
          res.redirect('/login');
        }
      })
      .catch(err => {
        console.log('error:', err.message);
      });
  });

  //Register Page POST Route
  router.post("/register", (req, res) => {
    console.log(req.body);
    const {name, email, password} = req.body;
    addUser(name, email, password)
      .then((response) => {
        res.redirect('/');
      });
  });

  // Logout POST Route
  router.post('/logout', (req, res) => {
    console.log(req.body);
    req.session = null;
    res.redirect('/');
  });


  // User Page
  router.get("/", (req, res) => {
    const userId = req.session.user_id;
    getUserById(userId)
      .then(user => {
        const templateVars = { user };
        res.render("index", templateVars);
      })

      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  router.get("/user", (req, res) => {
    const userId = req.session.user_id;
    getUserById(userId)
      .then(user => {
        res.json(user);
      });
  });

  return router;
};
