// load .env data into process.env
require('dotenv').config();

// Web server config
const PORT       = process.env.PORT || 8080;
const ENV        = process.env.ENV || "development";
const express    = require("express");
const bodyParser = require("body-parser");
const sass       = require("node-sass-middleware");
const app        = express();
const morgan     = require('morgan');
const cookieSession = require('cookie-session');
const cors_proxy = require('cors-anywhere');
// PG database client/connection setup -- abstracted to db file!
const db = require('./lib/db');
// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use("/styles", sass({
  src: __dirname + "/styles",
  dest: __dirname + "/public/styles",
  debug: true,
  outputStyle: 'expanded'
}));
app.use(express.static("public"));

app.use(cookieSession({
  name: 'session',
  keys: ['key1', 'key2']
}));

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
const usersRoutes = require("./routes/users");
const booksRoutes = require("./routes/books-router");
const moviesRoutes = require("./routes/movies-router");
const restaurantsRoutes = require("./routes/restaurants-router");
// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
app.use("/", usersRoutes(db));
app.use("/api/books", booksRoutes(db));
app.use("/api/movies", moviesRoutes(db));
app.use("/api/restaurants", restaurantsRoutes(db));
// Note: mount other resources here, using the same pattern above


// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).
// app.get("/", (req, res) => {
//   console.log('req.session', req.session.user_id)
//   const userId = req.session.user_id
//   console.log('userId', userId)

//   res.render("index");
// });

cors_proxy.createServer({
  originWhitelist: [], // Allow all origins
  requireHeader: ['origin', 'x-requested-with'],
  removeHeaders: ['cookie', 'cookie2']
});
// .listen(PORT, '0.0.0.0', function() {
//   console.log('Running CORS Anywhere on ' + host + ':' + port);
// });
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
