const crypto = require('crypto');
const user = require('../model/userSchema');

const AppError = require('../utils/AppError');
const wrapAsync = require('../middleware/asyncError');
const sendEmail = require('../utils/sendEmail');
const sendToken = require('../utils/jwtToken');
exports.createUser = wrapAsync(async (req, res) => {
  const User = new user(req.body);
  const createUser = await User.save();
  sendToken(createUser, 201, res);
});

// login
exports.loginUser = wrapAsync(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    next(new AppError('pls enter all field'));
  }
  const User = await user.findOne({ email: email }).select('+password');
  if (!User) {
    next(new AppError('invalid user and password', 401));
  }
  const passwordMatch = await User.comparePassword(password);

  if (!passwordMatch) {
    next(new AppError('invalid user and password', 401));
  }
  sendToken(User, 200, res);
  // res.status(200).json({ User, token, success: true });
});

// for Logout

exports.userLogout = wrapAsync(async (req, res) => {
  res.cookie('token', null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });
  res.status(200).json({ message: 'user logout', success: true });
});

// for forgot password

exports.forgotPassword = wrapAsync(async (req, res, next) => {
  const User = await user.findOne({ email: req.body.email });

  if (!User) {
    next(new AppError('invalid user email', 401));
  }

  const resetToken = User.forgotPasswordToken();
  await User.save({ validateBeforeSave: false });
  resetPasswordUrl = `${req.protocol}://${req.get(
    'host'
  )}/user/resetpassword/${resetToken}`;
  const message = `Your password reset token is :- \n\n ${resetPasswordUrl} \n\n
  if you have not requested this email then, please ignore it`;

  try {
    const emailSend = await sendEmail({
      email: User.email,
      subject: 'MD STORE Password Recovery',
      message,
    });
    if (emailSend) {
      next(new AppError('error occur on sending email', 501));
    }
    res.status(200).json({
      message: 'updateSingleUser is eworking',
      Product,
      success: true,
    });
  } catch (error) {
    User.resetPasswordToken = undefined;
    User.resetPasswordExpire = undefined;
    await User.save({ validateBeforeSave: false });
    next(new AppError(error.message, 500));
  }
});

// RESET PASSWORD
exports.resetPassword = wrapAsync(async (req, res, next) => {
  const token = req.params.token;
  const resetPasswordToken = crypto
    .createHash('sha256')
    .update(token)
    .digest('hex');

  const User = await user.findOne({
    resetPasswordToken,
    resetPasswordExpire: { $gt: Date.now() },
  });
  if (!User) {
    next(new AppError('Invalid token or token has been expired', 401));
  }
  if (req.body.password !== req.body.confirmPassword) {
    next(new AppError('password and confirmPassword doesnt match', 401));
  }
  User.password = req.body.password;
  User.resetPasswordToken = undefined;
  User.resetPasswordExpire = undefined;
  await User.save();
  sendToken(User, 201, res);
});

// Get User Details

exports.getUserDetail = wrapAsync(async (req, res, next) => {
  const userId = req.user.id;
  let User = await user.find({ _id: userId });
  if (!User) {
    next(new AppError('error in getting user detail', 401));
  }

  res.status(200).json({
    message: 'user detail are',
    User,
    success: true,
  });
});

// update userPassword
exports.updateUserPassword = wrapAsync(async (req, res, next) => {
  const userId = req.user.id;
  let User = await user.findOne({ _id: userId }).select('+password');
  if (!User) {
    next(new AppError('error in getting user detail', 401));
  }
  console.log(User);
  const passwordMatch = await User.comparePassword(req.body.oldPassword);

  if (!passwordMatch) {
    next(new AppError('oldPassword doesnt matches', 400));
  }
  if (req.body.newPassword !== req.body.confirmPassword) {
    next(new AppError('newPassword  and confirmPassword doesnt matches', 400));
  } else {
    User.password = req.body.newPassword;
    await User.save();

    res.status(200).json({
      message: 'password updated',
      User,
      success: true,
    });
  }
});

// update user
exports.updateUserprofile = wrapAsync(async (req, res) => {
  const userId = req.user.id;
  let User = await user.find({ _id: userId });
  if (!User) {
    next(new AppError('unable to get User detail', 500));
  } else {
    User = await user.findByIdAndUpdate({ _id: userId }, req.body, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });

    res.status(200).json({
      message: 'profile updated',
      User,
      success: true,
    });
  }
});

// get alluser detail(admin)

exports.getAllUser = wrapAsync(async (req, res) => {
  const Users = await user.find();
  const userCount = await user.countDocuments();
  res.status(200).json({ total: userCount, Users, success: true });
});

// get single detail (admin)

exports.getSingleUser = wrapAsync(async (req, res, next) => {
  const userId = req.params.id;
  let User = await user.findOne({ _id: userId });
  if (!User) {
    next(new AppError(`User doesnt exits by id ${userId}`, 400));
  }
  res.status(200).json({ User, success: true });
});

exports.updateSingleUser = wrapAsync(async (req, res, next) => {
  const userId = req.params.id;
  let User = await user.findOne({ _id: userId });
  if (!User) {
    next(new AppError(`User doesnt exits by id ${userId}`, 400));
  }
  User = await user.findByIdAndUpdate({ _id: userId }, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    message: 'user profile updated',
    User,
    success: true,
  });
});

// Delete user (admin)
exports.deleteSingleUser = async (req, res) => {
  const userId = req.params.id;
  let User = await user.find({ _id: userId });
  if (!User) {
    res.status(500).json({ message: 'user not working', success: false });
  }
  User = await user.findByIdAndDelete({ _id: userId });

  res.status(200).json({ message: 'user Deleted', success: true });
};
