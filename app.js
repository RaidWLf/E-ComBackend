const express = require("express");
const app = express(); // Initialized express app instance

// express file upload configuration
const fileUpload = require("express-fileupload");
app.use(fileUpload());

// cookie parser configuration
const cookieParser = require("cookie-parser");
app.use(cookieParser());

// Morgan Configuration
const morgan = require("morgan");
app.use(morgan("tiny")); // Morgan Middleware having tiny

// express middlewares
app.use(express.json()); // to read json
app.use(express.urlencoded({ extended: true })); // to read url encoded

// importing all routes
const home = require("./routes/homeRoute"); // imported homeRoute

// Use App middleware while using express Router
app.use("/api/v1", home); // 1. init route 2.final route (whole url path is intial + final)

// export App.js
module.exports = app;
