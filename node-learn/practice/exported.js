var count = (arr) => {
	console.log(arr.length)

	
}

//to avoid again seperately module.exports
// var firstEle = (arr) => {
// 		console.log(arr[0])
// 	}

//altrnative way

module.exports.firstEle = (arr) => { //no need of again exporting sepeartely
	console.log(arr[0])
}

module.exports.first = count 
//here in module.exports an object called first is created 
// and count function is assigned to it

module.exports.second = firstEle
//similarly here


// console.log(module.exports)
//output is
//{ first: [Function: count], second: [Function: firstEle] }

//or here from the above output's reflection

module.exports = {
	first : count,
	second : firstEle
}