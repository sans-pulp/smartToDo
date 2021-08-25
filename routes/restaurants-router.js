const express = require('express');
const router = express.Router();
const { getAllRestaurants, getRestaurantsByUserId, addRestaurant, deleteRestaurantById } = require('../db/queries/restaurant-queries');

module.exports = (db) => {
  //GET /api/restaurants
  router.get("/", (req, res) => {
    getAllRestaurants()
      .then(restaurants => {
        res.json(restaurants);
      });
  });

  router.get("/:id", (req, res) => {
    const userId = req.session.user_id;
    getRestaurantsByUserId(userId)
      .then(restaurants => {
        res.json(restaurants);
      });
  });

  router.post("/new", (req, res) => {
    console.log(req.body);
    const restObj = req.body;
    addRestaurant(restObj)
      .then(() => {
        res.json({success: true});
      });
  });

  router.delete("/:id", (req, res) => {
    console.log(req.params);
    const id = req.params.id;
    deleteRestaurantById(id)
      .then(() => {
        res.json({success: true});
      });
  });

  return router;
};
