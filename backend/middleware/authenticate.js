const jwt = require('jsonwebtoken');
const wrapAsync = require('../middleware/asyncError');
const AppError = require('../utils/AppError');
const user = require('../model/userSchema');
exports.isAuthenticate = wrapAsync(async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    next(new AppError('user must be login', 401));
  }
  const decodeData = jwt.verify(token, process.env.JWT_SECRET_KEY);
  req.user = await user.findById(decodeData.id);
  // console.log(decodeData);
  // console.log(req.user);
  next();
});

exports.authorizeRole = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      next(
        new AppError(
          `ROLES: ${req.user.role} is not allowed to access this resource `,
          401
        )
      );
    }
    next();
  };
};
