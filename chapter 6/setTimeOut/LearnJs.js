/*
Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.

Сделайте два варианта решения.

    Используя setInterval.
    Используя рекурсивный setTimeout.


let newNum;

function printNumbers(from,to){
	let num = from

	const timeid = setInterval(()=>{
		console.log(num)
		if(num===to){
			clearInterval(timeid)
		}
		num++;
	},500)

}
 
printNumbers(1,5)

*/

/*

function printNumbers(from,to){
	let = id = setTimeout(()=>{
		console.log(from)
		from++;
		if(from<=to){
			printNumbers(from,to)
		}
	},1000)


}

console.log(printNumbers(1,5))

*/