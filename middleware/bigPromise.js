module.exports = (func) => (req, res, next) =>
  Promise.resolve(func(req, res, next)).catch(next);

// Needs to learn more about Promises in JavaScript
