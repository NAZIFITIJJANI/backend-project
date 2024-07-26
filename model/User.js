const mongoose = require('mongoose');
const { isEmail } = require("validator")
const bcrypt = require('bcrypt')

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: [true, "please enter your email"],
        unique: [isEmail, "this email has already been used"]
    },

    password: {
        required: [true, "please enter your password"],
        type: String,
        minlength: [6, "password shouldn't be less than six characters"]
    }
},

);

userSchema.pre('save', async function (next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next()
})

// userSchema.post()


userSchema.statics.login = async function (email, password) {
    const user = await this.findOne({ email })
    if (user) {

        const auth = await bcrypt.compare(password, user.password)
        if (auth) {
            return user;
        }
        throw Error('incorrect password')
    }
    throw Error('email not correct')
}


const User = mongoose.model('user', userSchema);
module.exports = User;
