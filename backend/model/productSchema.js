const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: { type: String, required: [true, 'enter name'], trim: true },
  desc: {
    type: String,
    required: [true, 'enter name'],
    maxlength: [300, 'desc cannot exceed 300 char'],
  },
  category: {
    type: String,
    required: [true, 'enter category'],
  },
  stock: { type: Number, default: 1 },
  price: { type: Number, required: [true, 'enter Price'] },
  image: [
    {
      id: { type: String, required: [true, 'enter image id'] },
      url: { type: String, required: [true, ' enter image url'] },
    },
  ],
  review: [
    {
      name: { type: String, required: [true, 'enter userId'] },
      rating: { type: Number, required: [true, 'enter userId'] },

      comment: {
        type: String,
        required: [true, ' enter image url'],
        maxlength: [250, 'desc cannot exceed 300 char'],
      },
    },
  ],

  seller: { type: String, required: [true, 'enter sellerName'] },
  createdBy: {
    type: Schema.ObjectId,
    ref: 'User',
    required: true,
  },
  createAt: { type: Date, default: Date.now },
});
const product = new mongoose.model('PRODUCT', productSchema);
module.exports = product;
