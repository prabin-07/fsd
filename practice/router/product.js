const express=require('express')
const router = express.Router()
const Product =require("../models/productModel")
const multer = require('multer')

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"uploads/")
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now()+"-"+file.originalname)
    }
})
const files = multer({storage})

router.get("/", (req,res) => {
    res.render('home')
})

router.post("/add", files.single('pImg') , async (req,res)=>{
    const pImg = `/uploads/${req.file.filename}`
    const { pName,pPrice, pCat } =  req.body;
    console.log(req.file)
    const data =await Product.create({
        product_name : pName,
        product_price : pPrice,
        product_category : pCat,
        product_img : pImg
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

router.post('/delete/:id', async(req,res)=>{
    try{
        await Product.findByIdAndDelete(req.params.id)
        res.redirect('/product/display')
    }catch(err){
        console.log(err);
        res.redirect('/home')
    }
})

module.exports=router;