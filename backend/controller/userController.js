const user = require('../model/userSchema');

exports.createUser = async (req, res) => {
  const User = new user(req.body);

  const createUser = await User.save();

  res.status(200).json({ message: 'User Created', createUser, success: true });
};

exports.getAllUser = async (req, res) => {
  const User = await user.find();
  const userCount = await user.countDocuments();
  res.status(200).json({ total: userCount, User, success: true });
};

exports.getSingleUser = async (req, res) => {
  const userId = req.params.id;
  const User = await user.find({ _id: userId });

  res.status(200).json({ User, success: true });
};

exports.updateSingleUser = async (req, res) => {
  const userId = req.params.id;
  let User = await product.find({ _id: userId });
  if (!User) {
    res.status(500).json({ message: 'User not working', success: false });
  }
  User = await user.findByIdAndUpdate({ _id: userId }, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    message: 'updateSingleUser is eworking',
    Product,
    success: true,
  });
};

exports.deleteSingleUser = async (req, res) => {
  const userId = req.params.id;
  let User = await user.find({ _id: userId });
  if (!User) {
    res.status(500).json({ message: 'user not working', success: false });
  }
  User = await user.findByIdAndDelete({ _id: userId });

  res.status(200).json({ message: 'user Deleted', success: true });
};
