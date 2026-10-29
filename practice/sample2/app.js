const express = require('express')
const app = express()

app.use(express.urlencoded({extended:true}))
app.set("view engine","hbs")
app.use(express.static('public'))

app.get("/login", (req,res) => {
    res.render('data')
})

app.post("/upload", (req,res)=>{
    const { sName,sBatch,sAge,sPhone } =  req.body;
    const data = [{
        
    }]
    res.render("display", {data});
})

app.listen(3000, () => {
    console.log("listening. http://localhost:3000")
})