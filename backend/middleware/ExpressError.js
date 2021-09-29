const ExpressError = (err, req, res, next) => {
  if (process.env.NODE_ENV === 'dev') {
    const { status = 500, message = 'Error Occur' } = err;
    console.log('hello' + err.stack);
    res
      .status(status)
      .json({ success: false, errmessage: message, errstack: err.stack });
  }
  // for production
  else if (process.env.NODE_ENV === 'prod') {
    let { status = 500, message = 'Error Occur' } = err;

    // Handling Mongoose duplicate key errors
    if (err.code === 11000) {
      message = `Duplicate ${Object.keys(err.keyValue)} entered`;
      status = 400;
    }

    // worng JWT error
    if (err.name === 'JsonWebTokenError') {
      message = 'Json web Token is invalid ,try again';
      status = 400;
    }
    // JWT EXPIRE error
    if (err.name === 'TokenExpiredError') {
      message = 'Json web Token is invalid ,try again';
      status = 400;
    }
    // Wrong Mongoose Object ID Error
    if (err.name === 'CastError') {
      message = `Resource not found. Invalid: ${err.value}`;
      status = 400;
    }
    // Handling Mongoose Validation Error
    if (err.name === 'ValidationError') {
      message = Object.values(err.errors).map((value) => value.message);
      status = 400;
    }
    console.log(err);
    res.status(status).json({ success: false, message });
  }
};
module.exports = ExpressError;
