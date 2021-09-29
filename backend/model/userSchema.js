const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,

    maxlength: [20, 'length cant be more than 20'],
    minlength: [3, 'length cant be less than 3'],
    required: [true, 'please enter name'],
    trim: true,
  },
  phone: {
    type: Number,
    required: [true, 'enter number'],
    unique: true,
    maxlength: [10, 'length is more than 10'],
    minlength: [10, 'length is less than 10'],
  },
  role: {
    type: String,
    enum: ['admin', 'regular'],
    default: 'regular',
  },
  email: {
    type: String,
    required: [true, 'enter number'],
    unique: true,
    // validate: [validator.isEmail, 'email is not valid'],
  },

  password: {
    type: String,
    required: [true, 'enter password'],
    maxlength: [20, 'length shouldnt be more than 20'],
    minlength: [6, 'length shouldnt be less than 10'],
    select: false,
  },

  // avatar: {
  //   publicId: { type: String, required: [true, 'enter image id'] },
  //   url: { type: String, required: [true, ' enter image url'] },
  // },
  resetPasswordToken: { type: String },
  resetPasswordExpire: { type: Date },
});

// for hashing
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 10);
});

// for jwt token

userSchema.methods.getJWTToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRE_TIME,
  });
};

// compare password
userSchema.methods.comparePassword = async function (enterPassword) {
  return await bcrypt.compare(enterPassword, this.password);
};

// / generate token for forgot password
userSchema.methods.forgotPasswordToken = function name() {
  const resetToken = crypto.randomBytes(20).toString('hex');
  this.resetPasswordToken = crypto
    .createHash('sha256')
    .update(resetToken)
    .digest('hex');

  this.resetPasswordExpire = Date.now() + 15 * 60 * 1000;
  return resetToken;
};

const user = new mongoose.model('USER', userSchema);
module.exports = user;
