const express=require('express')
const router = express.Router()
const Product =require("../models/productModel")
const multer = require('multer')

const files = multer({dest:"uploads/"})

router.get("/", (req,res) => {
    res.render('home')
})


router.post("/add", files.single('pImg') , async (req,res)=>{
    const { pName,pPrice, pCat,pImg } =  req.body;
    console.log(req.file)
    const data =await Product.create({
        product_name : pName,
        product_price : pPrice,
        product_category : pCat,
        product_image : pImg
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