const db = require('../../lib/db');

const getAllMovies = () => {
  return db.query('SELECT * FROM movies;')
    .then((res) => {
      console.log('getAllMovies query:', res.rows);
      return res.rows;
    })
    .catch((err) => {
      console.log('❌ getAllMovies query error:', err.stack);
    });
};

const getMoviesByUserId = (id) => {
  const query = 'SELECT * FROM movies WHERE user_id = $1;';
  return db.query(query, [id])
    .then((res) => {
      console.log('getAllMovies query:', res.rows);
      return res.rows;
    })
    .catch((err) => {
      console.log('❌ getMoviesById query error:', err.stack);
    });
};

const addMovie = (movieObj) => {
  const query = `INSERT INTO movies (user_id, title, release_date, image_thumbnail, rating, media_type) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *; `;
  const values = [movieObj.user, movieObj.title, movieObj.release_date, movieObj.image, movieObj.rating, movieObj.media_type];
  return db.query(query, values)
    .then((res) => {
      console.log('addMovie query', res.rows);
      return res.rows;
    })
    .catch((err) => {
      console.log('❌ addMovie query error:', err.stack);
    });
};

module.exports = {
  getAllMovies, getMoviesByUserId, addMovie
}
