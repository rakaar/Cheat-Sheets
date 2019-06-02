var  http = require('http')

http.createServer((req,res) => {
    console.log(req)                                            //req : which is a very huge object: 'req.url' is a useful one
    res.writeHead(200,{'Content-Type' : 'text/plain'})          //write Head    
    res.end('hey')                                              //end the response 
}).listen(8080)