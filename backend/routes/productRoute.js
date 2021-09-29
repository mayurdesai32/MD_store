const express = require('express');
const router = express.Router();
const {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateSingleProduct,
  deleteSingleProduct,
  createReview,
} = require('../controller/productController');

const { isAuthenticate, authorizeRole } = require('../middleware/authenticate');

router.post('/create', isAuthenticate, authorizeRole('admin'), createProduct);
router.get('/all', getAllProducts);
router.get('/single/:id', getSingleProduct);
router.put(
  '/update/:id',
  isAuthenticate,
  authorizeRole('admin'),
  updateSingleProduct
);
router.delete(
  '/delete/:id',
  isAuthenticate,
  authorizeRole('admin'),
  deleteSingleProduct
);

router.put('/createreview', isAuthenticate, createReview);

module.exports = router;
