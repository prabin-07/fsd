const express = require('express')
const router = express.Router()
const userModel = require('../models/userModel')
const bcrypt = require('bcrypt')

router.get("/login", async (req,res) => {
    try{
        res.render('login')
    }
    catch{
        res.render('login')
    }
})

router.post("/register", async(req,res) => {
    res.render('register')
})

module.exports=router