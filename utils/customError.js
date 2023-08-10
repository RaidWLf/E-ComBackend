// A Custom Error Handler Class extends from default Node ErrorHandler

class CustomError extends Error {
  constructor(message, status) {
    super(message); // default error handler message
    this.status = status; // new custom status erorr
  }
}
// Export Custom Error Handler
module.exports = CustomError;
