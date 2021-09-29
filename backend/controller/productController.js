const product = require('../model/productSchema');
const AppError = require('../utils/AppError');
const wrapAsync = require('../middleware/asyncError');
const Apifeatures = require('../utils/apiFeature');
exports.createProduct = wrapAsync(async (req, res) => {
  req.body.createdBy = req.user.id;
  const Product = new product(req.body);

  const createProduct = await Product.save();

  res
    .status(201)
    .json({ message: 'product created', createProduct, success: true });
});

exports.getAllProducts = wrapAsync(async (req, res) => {
  const productCount = await product.countDocuments();
  const resultPerPage = 8;
  const apifeatures = new Apifeatures(product.find(), req.query)
    .search()
    .filter()
    .pagination(resultPerPage);
  const Product = await apifeatures.query;
  res
    .status(200)
    .json({ Total: productCount, message: Product, success: true });
});

exports.getSingleProduct = wrapAsync(async (req, res) => {
  const productId = req.params.id;
  const Product = await product.find({ _id: productId });

  res.status(200).json({ message: Product, success: true });
});

exports.updateSingleProduct = wrapAsync(async (req, res, next) => {
  const productId = req.params.id;
  let Product = await product.findOne({ _id: productId });
  if (!Product) {
    next(new AppError(`Cannot  find order with ${productId}`, 404));
  }
  Product = await product.findByIdAndUpdate({ _id: productId }, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    message: 'updateSingleProduct is eworking',
    Product,
    success: true,
  });
});

exports.deleteSingleProduct = wrapAsync(async (req, res) => {
  const productId = req.params.id;
  let Product = await product.find({ _id: productId });
  if (!Product) {
    next(new AppError(`Cannot  find order with ${productId}`, 404));
  }
  Product = await product.findByIdAndDelete({ _id: productId });

  res.status(200).json({ message: 'Product Deleted', success: true });
});

// for creating review
exports.createReview = wrapAsync(async (req, res) => {
  const { rating, productId, comment } = req.body;
  const review = {
    user: req.user.id,
    name: req.user.name,
    rating: Number(rating),
    comment,
  };
  const Product = await product.findOne({ _id: productId });

  const isReviews = Product.reviews.find(
    (ele) => ele.user.toString() === req.user.id.toString()
  );
  console.log(isReviews);
  if (isReviews) {
    Product.reviews.forEach((ele) => {
      if (ele.user.toString() === req.user.id.toString()) {
        (ele.rating = rating), (ele.comment = comment);
      }
    });
  } else {
    Product.reviews.push(review);
    console.log('hello');
    Product.numofreviews = Product.reviews.length;
  }

  let avg = 0;
  Product.reviews.forEach((ele) => (avg += ele.rating));

  Product.avgratings = avg / Product.reviews.length;
  await Product.save({ validateBeforeSave: false });
  res.status(200).json({
    success: true,
    message: 'product review updated',
  });
});
