const express = require('express')
const app = express()
const port = 3620
const hbs = require('hbs');
const path = require('path')

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res, next) => {
  res.render('index');
});

app.get('/players', (req, res, next) => {
  res.render('players');
});

app.get('/teams', (req, res, next) => {
  res.render('teams');
});

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
});