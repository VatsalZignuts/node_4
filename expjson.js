 const  express = require('express')
 const app = express()
 const port = 3620
 
 app.get('/', (req, res) => {
    res.send('WelCome')
 });

 app.get('/json', (req, res) => {
    res.json([{
        no : 1,
        name : "vatsal",
        city : "jnd"
    }]);
 });

 app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
 });

