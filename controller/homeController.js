// Home Controller
const BigPromise = require("../middleware/bigPromise");
// Needs to be exported to homeRoute file

exports.home = BigPromise((req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome to HomePage",
  });
});
