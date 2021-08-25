const db = require('../../lib/db');

const getAllBooks = () => {
  return db.query('SELECT * FROM books;')
    .then((res) => {
      console.log('getAllBooks query:', res.rows);
      return res.rows;
    })
    .catch((err) => {
      console.log('❌ getAllBooks query error:', err.stack);
    });
};

const getBooksByUserId = (id) => {
  const query = 'SELECT * FROM books WHERE user_id = $1;';
  return db.query(query, [id])
    .then((res) => {
      console.log('getAllBooks query:', res.rows);
      return res.rows;
    })
    .catch((err) => {
      console.log('❌ getBooksById query error:', err.stack);
    });
};

const addBook = (bookObj) => {
  const query = `INSERT INTO books (user_id, title, author, publisher, image_thumbnail) VALUES ($1, $2, $3, $4, $5) RETURNING *; `;
  const values = [bookObj.user, bookObj.title, bookObj.author, bookObj.publisher, bookObj.image];
  return db.query(query, values)
    .then((res) => {
      console.log('addBook query', res.rows);
      return res.rows;
    })
    .catch((err) => {
      console.log('❌ addBook query error:', err.stack);
    });
};

const deleteBookById = (id) => {
  const query = `DELETE FROM books WHERE id = $1 RETURNING *;`;
  return db.query(query, [id])
    .then((res) => {
      console.log('deleteBookById query:', res.rows);
      return res.rows;
    })
    .catch((err) => {
      console.log('❌ deleteBookById query error:', err.stack);
    });
};

module.exports = {
  getAllBooks, getBooksByUserId, addBook, deleteBookById
};
