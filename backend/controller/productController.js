const product = require('../model/productSchema');
const AppError = require('../utils/AppError');
const wrapAsync = require('../middleware/asyncError');
const Apifeatures = require('../utils/apiFeature');
exports.createProduct = wrapAsync(async (req, res) => {
  req.body.createdBy = req.user.id;
  const Product = new product(req.body);

  const createProduct = await Product.save();

  res.status(200).json({ message: createProduct, success: true });
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
  let Product = await product.find({ _id: productId });
  if (!Product) {
    // res.status(500).json({ message: 'product not working', success: false });
    next(new AppError('hello', 503));
    console.log('hello');
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
    res.status(500).json({ message: 'product not working', success: false });
  }
  Product = await product.findByIdAndDelete({ _id: productId });

  res.status(200).json({ message: 'Product Deleted', success: true });
});
