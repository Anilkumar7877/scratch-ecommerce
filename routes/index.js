const express=require('express')
const router=express.Router()
const isLoggedin=require('../middlewares/isLoggedin')
const productModel=require('../models/product-model')
const userModel = require('../models/user-model')

router.get('/', function (req, res) {
    let error=req.flash("error")
    res.render("index", {error, loggedin: false})
})

router.get('/shop', isLoggedin, async function (req, res) {
    let products=await productModel.find()
    res.render('shop', {products})
})

router.get('/addtocart/:productid', isLoggedin, async function (req, res) {
    let user=await userModel.findOne({_id: req.user._id})
    if(user.cart.indexOf(req.params.productid)==-1){
        user.cart.push(req.params.productid)
        await user.save()
    }
    res.redirect('/shop')
})

router.get('/cart', isLoggedin, async function (req, res) {
    let user = await userModel.findOne({_id: req.user._id}).populate("cart")
    // console.log(user);
    res.render('cart',{user})
})

module.exports=router;