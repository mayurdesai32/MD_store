const express = require('express');
const router = express.Router();
const {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateSingleProduct,
  deleteSingleProduct,
} = require('../controller/productController');

router.post('/create', createProduct);
router.get('/all', getAllProducts);
router.get('/single/:id', getSingleProduct);
router.put('/update/:id', updateSingleProduct);
router.delete('/delete/:id', deleteSingleProduct);

module.exports = router;
