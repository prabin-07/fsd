const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
    userName : String,
    password : String,
    emailId : String,
})

module.exports=mongoose.model("User",userSchema);