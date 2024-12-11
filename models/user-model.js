const mongoose = require('mongoose')
const { array } = require('../config/multer-config')

const userSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    cart: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "product"
        }
    ],
    isadmin: Boolean,
    orders: Array,
    contact: Number,
    picture: String,
})

module.exports = mongoose.model('user', userSchema)