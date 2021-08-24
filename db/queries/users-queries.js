//i want to abstract the queries away from server.js and users.js...
const db = require('../../lib/db');

const getUserByEmail = (email) => {
  return db.query('SELECT * FROM users WHERE email = $1', [email])
    .then((res) => {
      console.log('db query:', res.rows[0]);
      return res.rows[0];
    })
    .catch((err) => {
      console.log('❌ getUserByEmail query error:', err.stack);
    });
};

const getUserById = (id) => {
  return db.query(`SELECT * FROM users WHERE id = $1;`, [id])
    .then((res) => {
      return res.rows[0];
    })
    .catch((err) => {
      console.log('❌ getUserById query error:', err.stack);
    });
};

const addUser = (name, email, password) => {
  return db.query('INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *;', [name, email, password])
    .then((res) => {
      console.log('New user added', res.rows);
      return res.rows;
    })
    .catch((err) => {
      console.log('❌ addUser query error:', err.message);
    });

};

module.exports = { getUserByEmail, getUserById, addUser };
