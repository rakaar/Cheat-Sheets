
var fs = require('fs')

//readFileSync is synchronus in nature, it blocks the code till whole file is read
console.log(fs.readFileSync('read.txt','utf8'))

//async version
fs.readFile('read.txt','utf8',(err, data) => {
	//the call back func
	//do something with data read
	console.log(data)
})

//deleting files
fs.unlink('filename.txt',() => {
	//optional callback
})

fs.writeFileSync('write.txt','sample text')

//////////////////////directories\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

//sync
fs.mkdir('name_of_dir')
fs.rmdir('name_of_dir')

//async
fs.mkdirSync('dir',() => {
	//call back func

})