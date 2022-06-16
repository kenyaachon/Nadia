const express = require("express");
const router = express.Router();
const debug = require("debug")("nadia:route:admin");
const _ = require("lodash");
const reservations = require("../lib/reservations");

// Get admin listing
// eslint-disable-next-line no-unused-vars
router.get("/", function (req, res, next) {
  debug(`Getting Admin ${reservations[0]}`);
  reservations.fetch().then((reservations) => {
    res.render("admin", {
      title: "Booking Requests - Nadias Garden",
      reservations,
      header: _.keys(reservations[0]),
    });
  });
});

module.exports = router;
