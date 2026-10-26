const express = require('express')
const app = express()

app.use(express.urlencoded({extended:true}))
app.set("view engine","hbs")
app.use(express.static('public'))

app.get("/", (req,res) => {
    res.render('home')
})

app.post("/add", (req,res)=>{
    const { pName,pPrice, pCat } =  req.body;
    const data = [{
        pName,pPrice,pCat
    }]
    res.render("display", {data});
})

app.listen(3000, () => {
    console.log("listening. http://localhost:3000")
})