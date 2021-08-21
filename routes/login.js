const express = require('express');
const router  = express.Router();

// Login GET request

router.get("", (req, res) => {
    res.render("todo_login");
  });


  module.exports = router;
