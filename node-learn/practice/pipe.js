var http = require('http');
var fs = require('fs');

//instead of writing manually the readStream- writing 'on' event then call back,
//pipe method does all that for u

http
  .createServer((req, res) => {
    var readStream = fs.createReadStream('./read.txt', 'utf8');
    readStream.pipe(res);
    //that pipe method is going to send u data to response after every chunk is recieved
  })
  .listen(8080);

{
  /*piping is a mecchanism where output of one stream is sent as an input of another stream
in the above example, output of readstream is sent to res.

Chaining:
its something like pipe().pipe()
*/
}
