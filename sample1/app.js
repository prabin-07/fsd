const express = require('express')
const app = express()

app.use(express.urlencoded({extended:true}))
app.set("view engine","hbs")
app.use(express.static('public'))

app.get("/login", (req,res) => {
    res.render('login')
})

app.post("/home", (req,res)=>{
    const { u_name,pass } =  req.body;
    const data = [{
        u_name,pass
    }]
    res.render("home", {data});
})

app.listen(3000, () => {
    console.log("listening. http://localhost:3000")
})