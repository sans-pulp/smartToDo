const db = require('../../lib/db');

const getAllProducts = () => {
  return db.query('SELECT * FROM products;')
    .then((res) => {
      console.log('getAllProducts query:', res.rows);
      return res.rows;
    })
    .catch((err) => {
      console.log('❌ getAllProducts query error:', err.stack);
    });
};

const getProductsByUserId = (id) => {
  const query = 'SELECT * FROM products WHERE user_id = $1;';
  return db.query(query, [id])
    .then((res) => {
      console.log('getProductsByUserId query:', res.rows);
      return res.rows;
    })
    .catch((err) => {
      console.log('❌ getProductsByUserId query error:', err.stack);
    });
};

const addProduct = (productObj) => {
  const query = `INSERT INTO products (user_id, title, price, image_thumbnail, rating, url, type) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *; `;
  const values = [productObj.user, productObj.title, productObj.price, productObj.image, productObj.rating, productObj.url, productObj.type];
  return db.query(query, values)
    .then((res) => {
      console.log('addProduct query', res.rows);
      return res.rows;
    })
    .catch((err) => {
      console.log('❌ addProduct query error:', err.stack);
    });
};

const deleteProductById = (id) => {
  const query = `DELETE FROM products WHERE id = $1 RETURNING *;`;
  return db.query(query, [id])
    .then((res) => {
      console.log('deleteProductById query:', res.rows);
      return res.rows;
    })
    .catch((err) => {
      console.log('❌ deleteProductById query error:', err.stack);
    });
};

module.exports = {
  getAllProducts, getProductsByUserId, addProduct, deleteProductById
};
