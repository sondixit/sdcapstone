const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        name: { 
            type: String, 
            required: true
        }, 
        email: {
            type: String,
            require: true,
            unique: true
        },
        password: { 
            type: String, 
            required: true
        }, 
        isAdmin: {
            type: Boolean,
            required: true,
            default: false
        },
        encryptedEmail: {
            type: String,
            require: true,
            unique: true
        },
    }, 
    {
        timestamps: true
    }
);

const User = mongoose.model('User', userSchema);

module.exports = User;