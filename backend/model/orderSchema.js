const mongoose = require('mongoose');
const validator = require('validator');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  shippingInfo: {
    address: { type: String, required: [true, 'enter address'] },
    state: { type: String, required: [true, 'enter state'] },
    country: { type: String, required: [true, 'enter country'] },
    pincode: { type: Number, required: [true, 'enter pincode'] },
    phone: {
      type: Number,
      required: [true, 'enter number'],
      // maxlength: [10, 'length is more than 10'],
      // minlength: [10, 'length is less than 10'],
    },
  },
  orderItems: [
    {
      name: { type: String, required: true },
      price: { type: Number, required: true },
      quantity: { type: Number, required: true },
      image: { type: String, required: true },
      productId: { type: Schema.ObjectId, ref: 'Product', required: true },
    },
  ],
  user: {
    type: Schema.ObjectId,
    ref: 'user',
    required: true,
  },

  paymentInfo: {
    id: { type: String, required: true },
    status: {
      type: String,
      required: true,
    },
  },

  paidAt: {
    type: Date,
    required: true,
  },
  itemsPrice: {
    type: Number,
    default: 0.0,
  },
  shippingPrice: {
    type: Number,
    default: 0.0,
  },
  taxPrice: {
    type: Number,
    default: 0.0,
  },
  totalPrice: {
    type: Number,
    default: 0.0,
  },
  orderStatus: {
    type: String,
    default: 'Processing',
    required: true,
  },
  deliveredAt: Date,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const order = new mongoose.model('ORDER', orderSchema);
module.exports = order;
