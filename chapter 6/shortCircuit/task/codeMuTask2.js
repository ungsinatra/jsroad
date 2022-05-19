// Функция ggg принимает 2 параметра: число и анонимную функцию, которая возводит число в квадрат. Возведите число в 4-тую степень с помощью ggg.
'use strict'

/*
function ggg(num, func){
	
	return func(num);

}


console.log(ggg(4,function(that){
	return that**4
}))

*/



// Функция ggg принимает 2 параметра: анонимную функцию, которая возвращает 3 и анонимную функцию, которая возвращает 4. Верните результатом функции ggg сумму 3 и 4.


/*
function ggg(func1,func2){
	return (func1()+func2());
}

console.log(ggg((()=> 3 ),()=>4))
*/




// Дана функция ggg. Она требует первым параметром число, вторым функцию, которая возводит в квадрат, а третьим параметром функцию, которая возводит в куб. Эти функции есть как Function Declaration - kvadrat, kub. Пусть функция ggg вернет сумму квадрата и куба числа

/*
function square(number){
	return number**2
}

function cube(number){
	return number**3

}

function ggg(num,func1,func2){

	const squareVal = func1(num);
	const cubeResVal = func2(num)
	let tottal = squareVal+cubeResVal
	return tottal;
}
console.log(ggg(2,square,cube));
*/