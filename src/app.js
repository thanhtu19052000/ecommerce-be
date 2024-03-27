const compression = require("compression");
const express = require("express");
const { default: helmet } = require("helmet");
const app = express();
const morgan = require("morgan");

// init middleware
app.use(morgan("dev"));
app.use(helmet());
app.use(compression());
//init db

//init routers
app.get("/", (req, res, next) => {
  return res.status(500).json({
    message: "well come to eCommerce web",
  });
});

// handle error

module.exports = app;
