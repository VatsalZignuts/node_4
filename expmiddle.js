const  express = require('express')
const app = express()
const port = 3620

const reqFilter = (req,res,next) => {
    console.log('reqFilter');
    if (!req.query.age){
        res.send("Please provide age")
    }
    else if (req.query.age < 18){
        res.send("you can not access the page")
    }
    else{
        next();
    }
}

app.use(reqFilter)

app.get('/', (req, res) => {
    res.send('welcome to home page')
});

app.get('/user', (req, res) => {
    res.send('welcome to user page')
});

app.listen(port, () => {
    console.log(`App listening on port ${port}!`)
}); 