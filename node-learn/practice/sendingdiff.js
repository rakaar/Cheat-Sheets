var http = require('http')
var fs = require('fs')

//sending html files
http.createServer((req,res) => {
    res.writeHead(200,{ 'Content-Type' : 'text/html'})
    var readStream = fs.createReadStream('./sample.html','utf8')
    readStream.pipe(res)    
}).listen(8080)

//sending json data
http.createServer((req,res) => {
    res.writeHead(200,{'Content-Type' : 'application/json'})
    var jsonData = {
        name : 'rka',
        age : 20,
    }
    res.end(JSON.stringify(jsonData)) // response can only be string type,not json type. so use json.stringify
}).listen(8080)