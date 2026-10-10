const express = require('express');
const app = express()
const path = require('path');

app.use(express.static("public"));

app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname,"views","home.html"))
})

app.get("/contact", (req,res) => {
    res.sendFile(path.join(__dirname,"views","contact.html"));
})

app.get("/about", (req,res) => {
    res.sendFile(path.join(__dirname,"views","about.html"));
})

app.listen(3000, () => {
    console.log("Listening");
})