const express = require("express");
const app = require("./app");

// importing dotenv
require("dotenv").config();

// App to listen on Port (Starting server)
app.listen(process.env.PORT, () => {
  console.log("listening on port " + process.env.PORT);
});
