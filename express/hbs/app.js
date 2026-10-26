const express = require('express');
const app = express()
const path = require('path');

app.set("view engine",'hbs')

app.use(express.static("public"));

app.use(express.static(path.join(__dirname, 'public')));

const data=[
    {name: "prabin" , age : 22},
    {name : "ajin", age : 22}
];

app.get("/", (req,res) => {
    res.render("home",{data}); //render displays template and data
})

// app.get("/contact", (req,res) => {
//     res.sendFile(path.join(__dirname,"views","contact.html"));
// })

// app.get("/about", (req,res) => {
//     res.sendFile(path.join(__dirname,"views","about.html"));
// })

app.listen(3000, () => {
    console.log("Listening");
})