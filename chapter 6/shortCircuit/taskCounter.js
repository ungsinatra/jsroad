// Самостоятельно, не подсматривая в мой код, реализуйте счетчик вызова функции, работающий на замыканиях. 

function func(){
	let counter = 0;//замыкаеться внутри func()
	return function(){
		return counter++

	}

}


let counterFc = func();
console.log(counterFc())//0
console.log(counterFc())//1
console.log(counterFc())//2
console.log(counterFc())//3
console.log(counterFc())//4