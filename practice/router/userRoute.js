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

router.post("/loginUser", async(req,res)=> {
    try{
        const {username, password} = req.body;
        const userData = await userModel.findOne({
            userName : username
        })
        if(!userData){
            res.redirect('/user/login')
        }
        const pass = await bcrypt.compare(password,userData.password)
        if(!pass){
            res.redirect('/user/login')
        }
        res.redirect('/product')
    }catch{
        res.redirect('/user/login')
    }
})

router.get("/register", async(req,res) => {
    try{
        res.render('register')
    }catch{
        res.redirect('/register')
    }
})

router.post("/registerUser", async (req,res) => {
    try{
        const {username, email, password} = req.body
        const passwordHash = await bcrypt.hash(password, 10)
        const data = await userModel.create({
            userName : username,
            emailId : email,
            password : passwordHash
        })
        res.render('login')
    }catch{
        res.redirect('/user/register')
    }
})

module.exports=router