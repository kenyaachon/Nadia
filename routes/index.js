const express = require("express");
const router = express.Router();

// eslint-disable-next-line no-unused-vars
router.get("/", function (req, res, next) {
  res.render("index", { title: "Nadia's Garden" });
});

module.exports = router;
