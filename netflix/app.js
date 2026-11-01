const express = require('express')
const app = express()
const mongoose = require('mongoose')

app.set("view engine", "hbs")
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))

app.get("/", (req,res)=> {
    res.render('homePage')
})

app.get

app.listen(3000, ()=> {
    console.log('listening. http://localhost:3000/')
})