const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    },
    role: {
        type: String,
        required: true,
        enum: ['user', 'admin', 'moderator'], // Specifies the allowable roles
        default: 'user' // Default role when none is specified
    },
    createdOn: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('User', userSchema);
