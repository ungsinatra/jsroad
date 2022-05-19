// Пусть функция в замыкании хранит число 10. Сделайте так, чтобы каждый вызов функции уменьшал это число на 1 и выводил на экран уменьшенное число.


function icriment(number=10){
	
	return function(){
		return --number;

	}

}
let newFc = icriment();//return fuction();



console.log(newFc())//9
console.log(newFc())//8
console.log(newFc())//7
console.log(newFc())//6
console.log(newFc())//5