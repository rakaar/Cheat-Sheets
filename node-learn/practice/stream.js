var fs = require('fs')


var writeStream = fs.createWriteStream('./writeStream.txt')
//should look into this highWaterMark { 'highWaterMark' : 16*1024 }
//data is the event when chunk of data is sent
fs.createReadStream('./read.txt','utf8').on('data',(chunk) => {
    console.log('new chunk')
    writeStream.write(chunk)
})