const express = require('express')
const app = express()
const mongoose = require('mongoose');
const productRouter = require("./router/product")

app.set("view engine","hbs")
app.use(express.urlencoded({extended:true}))
app.use('/uploads', express.static('uploads'))
app.use(express.static('public'))

app.use("/product",require("./router/product"));


mongoose.connect("mongodb://localhost:27017/Ecommerce").then(()=> 
    console.log("connected")).catch(()=>
    console.log("error occured"));

app.listen(3000, () => {
    console.log("listening. http://localhost:3000/product")
})