const express = require('express')
const app = express()

app.set("view engine","hbs")
const productRouter = require("./routes/product")
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))
app.use("/product",productRouter);

app.listen(3000, () => {
    console.log("listening. http://localhost:3000")
})