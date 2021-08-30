const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },

    password: {
        type: String,
        max: 1024,
        min: 6
    },

    role: {
        type: String,
        required: true
    },

    is_first_time_visited: {
        type: Boolean,
        default: true
    }
}, { timestamps: true }, { versionKey: false });

module.exports = mongoose.model('user', userSchema);