const mongoose = require('mongoose');

const pushSchema = new mongoose.Schema(
    {
        name: { 
            type: String, 
            required: true
        }, 
        message: {
            type: String,
            require: true
        },
        tokens: [{
            token: {
                type: String,
                required: true
            }
        }]
    }, 
    {
        timestamps: true
    }

);

const Push = mongoose.model('PushMessage', pushSchema);

module.exports = Push;