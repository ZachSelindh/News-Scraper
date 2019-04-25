const express = require("express");
var router = express.Router();

router.get("/", function(req, res) {
  res.render("index");
});

router.get("/saved", function(req, res) {
  res.render("saved");
});

module.exports = router;
