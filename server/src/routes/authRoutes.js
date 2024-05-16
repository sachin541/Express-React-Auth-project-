const express = require('express');
const router = express.Router();
const { loginUser, requestRegister, verifyOtp } = require('../controllers/authController');

router.post('/login', loginUser);
router.post('/register', requestRegister);
router.post('/verify-otp', verifyOtp);

module.exports = router;

