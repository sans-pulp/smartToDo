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
  router.post('/login', (req, res) => {
    const getUserByEmail = (email) => {
      return db.query('SELECT * FROM users WHERE email = $1', [email])
        .then((res) => {
          console.log('db query:', res.rows[0]);
          return res.rows[0];
        })
        .catch((err) => {
          console.log('❌ query error:', err.stack);
        });
    };
    const { email, password } = req.body;
    getUserByEmail(email)
      .then(user => {
        //console.log('getUserByEmail form call:', user);
        if (password === user.password) {
          //push user object into templateVars, target those variables in index.ejs (Profile card)
          //fire off a db query to books/movies, etc to retrieve all user lists. pass those into templateVars..
          res.redirect('/');
        }
      })
      .catch(err => {
        console.log('error:', err.message);
      });
    //console.log(user);
  });
  // Logout POST Route

  // Register Page GET Route
  router.get("/register", (req, res) => {
    res.render("todo_register");
  });
  //Register Page POST Route

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
