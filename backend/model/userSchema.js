const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: [true, 'enter name'], trim: true },
  phone: {
    type: Number,
    required: [true, 'enter number'],
    unique,
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
    unique,
  },

  password: {
    type: String,
    required: [true, 'enter password'],
    maxlength: [10, 'length shouldnt be more than 10'],
    minlength: [6, 'length shouldnt be less than 10'],
  },
  cPassword: {
    type: String,
    required: [true, 'enter password'],
    maxlength: [10, 'length shouldnt be more than 10'],
    minlength: [6, 'length shouldnt be less than 10'],
  },

  image: {
    publicId: { type: String, required: [true, 'enter image id'] },
    url: { type: String, required: [true, ' enter image url'] },
  },

  createAt: { type: Date, default: Date.now },
});
const user = new mongoose.model('USER', userSchema);
module.exports = user;
