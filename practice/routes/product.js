const express=require('express')
const router = express.Router()


router.get("/", (req,res) => {
    res.render('home')
})

router.post("/add", (req,res)=>{
    const { pName,pPrice, pCat } =  req.body;
    const data = [{
        pName,pPrice,pCat
    }]
    res.render("display", {data});
})

module.exports=router;