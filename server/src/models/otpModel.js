const mongoose = require('mongoose');

const otpSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    otp: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        index: { expires: '5m' }, // TTL index to expire OTPs after 5 minutes
    },
    userDetails: {
        type: Object,
        required: true,
    },
    otpCount: {
        type: Number,
        default: 1,
    },
    lastOtpTime: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model('OTP', otpSchema);

