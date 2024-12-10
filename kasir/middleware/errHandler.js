function errHandler(err, req, res, next) {
  let error = [];
  let statusCode = 500;

  console.log(err);
  switch (err.name) {
    case "SequelizeValidationError":
      if (err.errors) {
        err.errors.forEach((el) => {
          error.push(el.message);
        });
      }
      statusCode = 400;
      break;
    default:
      error.push(err.msg || "internal server error");
      statusCode = err.statusCode || 500;
  }

  res.status(statusCode).json({
    status: "failed",
    error: error,
  });
}

module.exports = errHandler;
