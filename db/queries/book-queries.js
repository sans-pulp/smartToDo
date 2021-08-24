const db = require('../../lib/db');

const getAllBooks = () => {
  return db.query('SELECT * FROM books_api;')
    .then((res) => {
      console.log('getAllBooks query:', res.rows);
      return res.rows;
    })
    .catch((err) => {
      console.log('❌ getAllBooks query error:', err.stack);
    });
};

const getBooksById = (id) => {
  const query = 'SELECT * FROM books_api WHERE id = $1;';
  return db.query(query, [id])
    .then((res) => {
      console.log('getAllBooks query:', res.rows);
      return res.rows;
    })
    .catch((err) => {
      console.log('❌ getBooksById query error:', err.stack);
    });
};

const addBook = (bookObj, user_id) => {
  const query = `INSERT INTO books_api (user_id, title, author, publisher, image_thumbnail) VALUES ($1, $2, $3, $4, $5) RETURNING *; `;
  const values = [user_id, bookObj.title, bookObj.author, bookObj.publisher, bookObj.image_thumbnail];
  return db.query(query, values)
    .then((res) => {
      console.log('addBook query', res.rows);
      return res.rows;
    })
    .catch((err) => {
      console.log('❌ addBook query error:', err.stack);
    });
};

module.exports = {
  getAllBooks, getBooksById, addBook
};
