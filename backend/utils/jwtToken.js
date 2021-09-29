const sendToken = (User, status, res) => {
  const token = User.getJWTToken();
  // options for cookie
  const options = {
    expires: new Date(
      Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };

  res
    .status(status)
    .cookie('token', token, options)
    .json({ sucess: true, User, token });
};

module.exports = sendToken;
