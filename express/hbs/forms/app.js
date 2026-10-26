const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('form');
});

app.post('/submit', (req, res) => {
  let pName = req.body.prod_name;
  let pPrice = req.body.prod_price;
  res.send("added")
});

app.listen(3000, () => {
  console.log(`Listening on ttp://locahlhost:3000`);
});