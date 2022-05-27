const express = require("express");
const router = express.Router();
const reservations = require("../lib/reservations");
const Reservation = require("../lib/schema/reservation");

router.get("/", function (req, res, next) {
  res.render("reservations");
});

router.post("/", function (req, res, next) {
  const reservation = new Reservation(req.body);
});
module.exports = router;
