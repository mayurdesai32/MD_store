const express = require('express');
const router = express.Router();
const {
  createUser,
  getAllUser,
  loginUser,
  userLogout,
  forgotPassword,
  resetPassword,
  getUserDetail,
  updateUserPassword,
  updateUserprofile,
  getSingleUser,
  updateSingleUser,
  deleteSingleUser,
} = require('../controller/userController');
const { isAuthenticate, authorizeRole } = require('../middleware/authenticate');
router.post('/register', createUser);

router.get('/login', loginUser);
router.get('/logout', isAuthenticate, userLogout);

router.post('/forgotpassword', forgotPassword);

router.put('/resetpassword/:token', resetPassword);
router.get('/me', isAuthenticate, getUserDetail);

router.put('/me/updatepassword', isAuthenticate, updateUserPassword);

router.put('/me/updateprofile', isAuthenticate, updateUserprofile);
router.get('/admin/all', isAuthenticate, authorizeRole('admin'), getAllUser);

router.get(
  '/admin/singleuser/:id',
  isAuthenticate,
  authorizeRole('admin'),
  getSingleUser
);

router.put(
  '/admin/updateuser/:id',
  isAuthenticate,
  authorizeRole('admin'),
  updateSingleUser
);
router.delete(
  '/admin/deleteuser/:id',
  isAuthenticate,
  authorizeRole('admin'),
  deleteSingleUser
);

module.exports = router;
