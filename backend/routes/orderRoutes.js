const express = require('express');
const router = express.Router();
const {
  createOrder,
  getAllOrder,
  getSingleOrder,
  getMyOrders,
  updateSingleOrder,
  deleteSingleOrder,
} = require('../controller/orderController');

const { isAuthenticate, authorizeRole } = require('../middleware/authenticate');

router.post('/create', isAuthenticate, createOrder);
router.get('/all', isAuthenticate, authorizeRole('admin'), getAllOrder);
router.get(
  '/single/:id',
  isAuthenticate,
  authorizeRole('admin'),
  getSingleOrder
);
router.get('/myorder', isAuthenticate, getMyOrders);

router.put(
  '/update/:id',
  isAuthenticate,
  authorizeRole('admin'),
  updateSingleOrder
);

router.delete(
  '/delete/:id',
  isAuthenticate,
  authorizeRole('admin'),
  deleteSingleOrder
);

module.exports = router;
