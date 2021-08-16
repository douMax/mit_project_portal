const mongoose = require("mongoose");
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },

    password: {
        type: String,
        default: "123456",
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

userSchema.pre('save', function (next) {

    if (!this.isModified('password')) {
        return next();
    }

    else {
        bcrypt.hash(this.password, 8, (err, hash) => {

            if (err) {
                return next(err);
            }

            this.password = hash;
            next();
        });
    }
});

userSchema.methods.checkPassword = function (password) {

    const passwordHash = this.password;

    return new Promise((resolve, reject) => {

        bcrypt.compare(password, passwordHash, (err, same) => {

            if (err) {
                return reject(err);
            }

            else resolve(same);
        })
    })
};


module.exports = mongoose.model('user', userSchema);