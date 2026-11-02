const express=require('express')
const router = express.Router()
const Product =require("../models/productModel")
router.get("/", (req,res) => {
    res.render('home')
})


router.post("/add", async (req,res)=>{
    const { pName,pPrice, pCat } =  req.body;
    const data =await Product.create({
        product_name : pName,
        product_price : pPrice,
        product_category : pCat
    })
    res.render("display",{data})
})

router.get("/display", async(req,res) => {
    const value = await Product.find()
    res.render('products',{value})
})

router.get('/:id', async(req,res)=> {
    const data1 = await Product.findById(req.params.id)
    res.render('display',{data1})
})

module.exports=router;