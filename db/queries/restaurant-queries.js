const db = require('../../lib/db');

const getAllRestaurants = () => {
  return db.query('SELECT * FROM restaurants;')
    .then((res) => {
      console.log('getAllRestaurants query:', res.rows);
      return res.rows;
    })
    .catch((err) => {
      console.log('❌ getAllRestaurants query error:', err.stack);
    });
};

const getRestaurantsByUserId = (id) => {
  const query = 'SELECT * FROM restaurants WHERE user_id = $1;';
  return db.query(query, [id])
    .then((res) => {
      console.log('getRestaurantsByUserId query:', res.rows);
      return res.rows;
    })
    .catch((err) => {
      console.log('❌ getRestaurantsByUserId query error:', err.stack);
    });
};

const addRestaurant = (restObj) => {
  const query = `INSERT INTO restaurants (user_id, name, address, city, image_thumbnail, rating, type) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *; `;
  const values = [restObj.user, restObj.name, restObj.address, restObj.city, restObj.image, restObj.rating, restObj.type];
  return db.query(query, values)
    .then((res) => {
      console.log('addRestaurant query', res.rows);
      return res.rows;
    })
    .catch((err) => {
      console.log('❌ addRestaurant query error:', err.stack);
    });
};

const deleteRestaurantById = (id) => {
  const query = `DELETE FROM restaurants WHERE id = $1 RETURNING *;`;
  return db.query(query, [id])
    .then((res) => {
      console.log('deleteRestaurantById query:', res.rows);
      return res.rows;
    })
    .catch((err) => {
      console.log('❌ deleteRestaurantById query error:', err.stack);
    });
};

module.exports = { getAllRestaurants, getRestaurantsByUserId, addRestaurant, deleteRestaurantById };
