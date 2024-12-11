const mongoose=require('mongoose')

const productSchema=mongoose.Schema({
    name: String,
    discount: {
        type: Number,
        default: 0
    },
    bgcolor: String,
    panelcolor: String,
    textcolor: String,
    price: Number,
    image: Buffer,
})

module.exports=mongoose.model('product', productSchema)