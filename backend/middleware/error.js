const ErrorHandler = require('../utils/errorHander')

module.exports = (err, req, res, next) => {
  err.statusCode = res.statusCode || 500;
  err.message = err.message || "Internal Server Error";

  //wrong MongoDB ID error
  if (err.name === "CastError") {
    const message = `Resource not found. Invalid: ${err.path}`;
    err = new ErrorHandler(message,404)
  }
    res.status(err.statusCode).json({
      success: false,
      error: err.message,
    });
};