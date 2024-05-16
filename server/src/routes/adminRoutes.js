const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const { authToken , requireUser, requireAdmin } = require('../middleware/authProvider')

// get all users 
router.get('/users',  authToken, requireAdmin, adminController.getAllUsers); 
// create a user 
router.post('/users',  authToken, requireAdmin, adminController.createUser);
// get single user 
router.get('/users/:id', authToken, requireAdmin, adminController.getUser);
// update single user 
router.patch('/users/:id', authToken, requireAdmin, adminController.updateUser);
// delete single user 
router.delete('/users/:id', authToken, requireAdmin,adminController.deleteUser);

module.exports = router;