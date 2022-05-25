const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");

let index = require("./routes/index");

// const config = {};

// var app = express();

// // Static assets.
// // Move this after the logger if you want to log requests for static assets.
// // Uncomment when you've added a favicon to your project.
// app.use(favicon(path.join(__dirname, "public", "favicon.ico")));
// app.use(express.static(path.join(__dirname, "public")));

// // view engine setup
// app.set("views", path.join(__dirname, "views"));
// app.set("view engine", "pug");

// app.use("/", index);

// // catch 404 and forward to error handler
// app.use(function (req, res, next) {
//   var err = new Error("Not Found");
//   err.status = 404;
//   next(err);
// });

// // error handler
// app.use(function (err, req, res, next) {
//   // set locals, only providing error in test
//   res.locals.message = err.message;
//   res.locals.error = req.app.get("env") === "test" ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render("error");
// });

// module.exports = app;

module.exports = () => {
  var app = express();
  // Static assets
  app.use(favicon(path.join(__dirname, "public", "favicon.ico")));
  app.use(express.static(path.join(__dirname, "public")));

  //view engine setup
  app.set("views", path.join(__dirname, "views"));
  app.set("view engine", "pug");

  //default route
  app.use("/", index);

  //catch 404 and forward to error handler
  app.use(function (req, res, next) {
    let error = new Error("Not Found");
    error.status = 404;
    next(error);
  });
  //error handler
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
