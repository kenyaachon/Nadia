const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");

const index = require("./routes/index");
const logger = require("morgan");
const cookieParser = require("cookie-parser");

const reservations = require("./routes/reservations");

module.exports = () => {
  const app = express();
  // Static assets
  app.use(favicon(path.join(__dirname, "public", "favicon.ico")));
  app.use(express.static(path.join(__dirname, "public")));

  //view engine setup
  app.set("views", path.join(__dirname, "views"));
  app.set("view engine", "pug");

  //middleware
  app.use(logger("dev"));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
  //default route
  app.use("/", index);

  app.use("/reservations", reservations);

  //catch 404 and forward to error handler
  app.use(function (req, res, next) {
    const error = new Error("Not Found");
    error.status = 404;
    next(error);
  });
  //error handler
  // eslint-disable-next-line no-unused-vars
  app.use(function (err, req, res, next) {
    //set locals, only providing error in test
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "test" ? err : {};

    //render the error page
    res.status(err.status || 500);
    res.render("error");
  });

  return app;
};
