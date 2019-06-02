var express = require('express')

var app = express()

//middleware is a piece of code that runs between a req and res
//the syntax of regular middle ware is 
app.get('/',(req,res,next) => {
    //some code
    next() // the next will allow u to go the next func/handle response or else the req will keep on hanging
})


//handling post request (when a form is submitted)
//use this
var bodyParser = require('bodyParser')

//get a middleware which parses the contnet (this can be found from docs)
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

//u can access the props using req.body
//here is the code
app.post('/form',urlencodedParser,(req,res) => {
    console.log(req.body) //this contains data of the form (key-val pairs) keys are 'for' tags
    res.send('success')
})

//to serve static files
//suppose u want to serve static files using middle ware !why and what? 
//suppose stylings and images are in different directory
//what about the requests made by such directoies,
//express has an inbuilt middleware method to handle such things,which goes this way...
app.use('/styles',express.static('/src'))
//whenever some requests are made by files in styles folder..
//allow them to be used by all the files in src directory
//IN Simpler words, all files in styles can have access in src directory

app.set('view engine','ejs')    //to tell express that we are using ejs template engine

app.get('/',(req,res) => {
    res.send('homepage') // to send a file use res.sendFile('name.html')
    //accessing query strings
    //express does that for u
    //u can get a object of query strings using...
    console.log(req.query)
    
})

app.get('/profile/:name', (req,res) => { 
    // res.send(`profile of ${req.params.name}`) //req.params contains all the dynamic routes
    // var data = {
    //     name : req.params.name,
    //     age : 19,
    //     plans : [1,2,3]
    // }

    //accessing query strings
    //express does that for u
    //u can get a object of query strings using...
    console.log(req.query)

    res.render('profile' ,{person :  req.params.name , age : 18})

})

app.listen(8080)