const order = require('../model/orderSchema');
const product = require('../model/productSchema');
const AppError = require('../utils/AppError');
const wrapAsync = require('../middleware/asyncError');

const user = require('../model/userSchema');
exports.createOrder = wrapAsync(async (req, res) => {
  const {
    shippingInfo,
    orderItems,
    paymentInfo,
    itemsPrice,
    shippingPrice,
    taxPrice,
    totalPrice,
  } = req.body;

  const Order = new order({
    shippingInfo,
    orderItems,
    paymentInfo,
    itemsPrice,
    shippingPrice,
    taxPrice,
    totalPrice,
    paidAt: Date.now(),
    user: req.user.id,
  });

  const createOrder = await Order.save();

  res
    .status(201)
    .json({ message: 'order created', createOrder, success: true });
});

exports.getAllOrder = wrapAsync(async (req, res) => {
  const orderCount = await order.countDocuments();

  const Orders = await order.find();

  let totalAmount = 0;

  Orders.forEach((element) => {
    totalAmount += element.totalPrice;
  });

  res.status(200).json({
    TotalOrder: orderCount,
    message: 'Your search result',
    totalAmount,
    Orders,
    success: true,
  });
});

exports.getSingleOrder = wrapAsync(async (req, res, next) => {
  const orderId = req.params.id;
  const Order = await order
    .findOne({ _id: orderId })
    .populate({ path: 'user', model: user });

  if (!Order) {
    return next(new AppError(`Order not found with this id`, 404));
  }
  res.status(200).json({ message: 'result', Order, success: true });
});

// login user order
exports.getMyOrders = wrapAsync(async (req, res) => {
  const Order = await order.find({ user: req.user.id });

  res.status(200).json({ message: 'result', Order, success: true });
});

// update order status
exports.updateSingleOrder = wrapAsync(async (req, res, next) => {
  const orderId = req.params.id;
  let Order = await order.findOne({ _id: orderId });
  if (!Order) {
    next(new AppError(`Cannot  find order with ${orderId}`, 404));
  }
  if (Order.orderStatus === 'Delivered') {
    next(new AppError(`you have alerady delivered this order`, 400));
  }
  const updateStock = async (id, quantity) => {
    const Product = await product.findOne({ _id: id });

    Product.stock = Product.stock - quantity;
    await Product.save({ validateBeforeSave: false });
  };
  console.log(Order);
  Order.orderItems.forEach(async (element) => {
    await updateStock(element.productId, element.quantity);
  });

  order.orderStatus = req.body.status;
  if (req.body.status === 'Delivered') {
    Order.orderStatus = 'Delivered';
    Order.deliveredAt = Date.now();
  }
  await Order.save({ validateBeforeSave: false });
  res.status(200).json({
    message: 'status updated',
    Order,
    success: true,
  });
});

exports.deleteSingleOrder = wrapAsync(async (req, res) => {
  const orderId = req.params.id;
  let Order = await order.find({ _id: orderId });
  if (!Order) {
    next(new AppError(`Cannot  find order with ${orderId}`, 404));
  }
  Order = await order.findByIdAndDelete({ _id: orderId });

  res.status(200).json({ message: 'Order Deleted', success: true });
});
