const express = require("express"); // importing express
const homeRouter = express.Router(); // initialization of Router

// importing Home Controller
const { home } = require("../controller/homeController");

// HomeRouter routing to "/" via GET method and Home Controller
homeRouter.route("/").get(home);

// exporting Home Router
module.exports = homeRouter;
