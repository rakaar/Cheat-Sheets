const express = require('express')
const path = require('path')

const app  = express()
app


app.get('/', (req,res,next) => {
	res.send(__dirname)
})

app.listen(8080)

// __dirname tells u directory name
//and also __filename