const express=require('express')
const ownermodel=require('../models/owner-model')
const isLoggedin=require('../middlewares/isLoggedin')

const router=express.Router();

router.get('/',function (req, res) {
    res.send('working.')
})

router.post('/create', async (req, res)=>{
    let owner=await ownermodel.find()
    if(owner.length>0){
        return res
            .status(503)
            .send("You don't have permission to create new owner.")
    }
    let {name, email, password}=req.body;
    // console.log({name, email, password});
    let createdowner=await ownermodel.create({
        name,
        email,
        password
    })
    res.status(201).send(createdowner)
})

router.get('/admin', isLoggedin, function (req, res) {
    let success = req.flash("success")
    res.render('admin', {success})
})

module.exports=router;