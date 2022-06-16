

const fn  = new Function('a,b','return a+b');

console.log(fn(5,3))//8 

let number = 15// global

function noGlbal(){
	var num = 15 

	const newFn = new Function('a,b','return a+b')
	return newFn

}

console.log(noGlbal()(number,14))//29





function getNumber(){
	let number = 14
	const show = new Function('console.log(number)')
	show()
}

getNumber()//number is not defined