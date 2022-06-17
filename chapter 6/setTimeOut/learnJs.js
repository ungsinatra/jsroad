// Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.

// Сделайте два варианта решения.

//     Используя setInterval.
//     Используя рекурсивный setTimeout.


function printNumbers(from,to){
	const corrent  = from++;
	if(corrent>to){
		return clearTimeout(timeout)
	}
	console.log(corrent)
	return setTimeout(printNumbers,1000,from,to)
}


const timeout = setTimeout(printNumbers,1000,0,10);

console.log(timeout)



//---------------------------------------
function printNumbers(from,to){
	let counter = from
	let stop = setInterval(function go(){
		console.log(counter)
		if(counter==to){
		clearInterval(stop)
		}
		counter++;
	},1000)

}

printNumbers(5,10)

