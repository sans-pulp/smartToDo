const express = require('express');
const router = express.Router();
const { getAllProducts, getProductsByUserId, addProduct, deleteProductById } = require('../db/queries/product-queries');

module.exports = (db) => {
  // GET /api/products
  router.get("/", (req, res) => {
    getAllProducts()
      .then(products => {
        res.json(products);
      });
  });

  router.get("/:id", (req, res) => {
    const userId = req.session.user_id;
    getProductsByUserId(userId)
      .then(products => {
        res.json(products);
      });
  });

  router.post("/new", (req, res) => {
    console.log(req.body);
    const productObj = req.body;
    addProduct(productObj)
      .then(() => {
        res.json({success: true});
      });
  });

  router.delete("/:id", (req, res) => {
    console.log(req.params);
    const id = req.params.id;
    deleteProductById(id)
      .then(() => {
        res.json({success: true});
      });
  });

  return router;

};
