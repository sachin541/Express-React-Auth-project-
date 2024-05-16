const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { authToken } = require('../middleware/authProvider')

// get self user info (id stored in jwt token)
router.get('/', authToken, userController.getUser);

// patch self user info (id stored in jwt token)
router.patch('/', authToken, userController.updateUser);


module.exports = router;
