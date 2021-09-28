const express = require('express');
const router = express.Router();
const {
  createUser,
  getAllUser,
  getSingleUser,
  updateSingleUser,
  deleteSingleUser,
} = require('../controller/userController');

router.post('/create', createUser);
router.get('/all', getAllUser);
router.get('/single/:id', getSingleUser);
router.put('/update/:id', updateSingleUser);
router.delete('/delete/:id', deleteSingleUser);

module.exports = router;
