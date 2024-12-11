const express = require('express')
const upload = require('../config/multer-config')
const productModel = require('../models/product-model')
const router = express.Router();

router.post('/create', upload.single('product_image'), async function (req, res) {
    try {
        let { name, discount, bgcolor, panelcolor, textcolor, price } = req.body;

        let product = await productModel.create({
            image: req.file.buffer,
            name,
            discount,
            bgcolor,
            panelcolor,
            textcolor,
            price
        })
        
        req.flash("success", "Product created successfully.")
        res.redirect("/owners/admin")
        // res.send(product)

    } catch (err) {
        res.send(err.message)
    }
})

module.exports = router;