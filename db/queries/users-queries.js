//i want to abstract the queries away from server.js and users.js...
const db = require('../../lib/db');

// const { Pool } = require('pg');
// const dbParams = require('../../lib/db');
// const db = new Pool(dbParams);
// db.connect();

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

module.exports = { getUserByEmail };
