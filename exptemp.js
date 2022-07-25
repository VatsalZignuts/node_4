const express = require('express')
const app = express()
const port = 3620
const ejs = require('ejs')

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
res.send('This is home page');
});

app.get('/profile', (req, res) => {
    res.render('profile');
    });

app.get('/contact', (req,res) => {
  res.send('this is the contact page');
})



app.listen(port, () => {
console.log(`Example app listening on port ${port}!`)
});

//Error: No default engine was specified and no extension was provided.