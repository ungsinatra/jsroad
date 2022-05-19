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
console.log(ggg(2,square,cube));//12
*/


// Сделайте функцию each, которая первым параметром принимает массив, а вторым - функцию, которая применится к каждому элементу массива. Функция each должна вернуть измененный массив

/*
function each(arr,func){
	return arr.filter(func())

}

function fcFillter(element){
	return (element)=>element>3;

}

console.log(each([1,2,3,4,5,6,7],fcFillter))//[4,5,6,7]
*/



// Сделайте функцию each, которая первым параметром принимает массив, а вторым - массив функций, которые по очереди применятся к каждому элементу массива: к первому элементу массива - первая функция, ко второму - вторая и так далее пока функции в массиве не закончатся, после этого возьмется первая функция, вторая и так далее по кругу.

/*
function each(arr,arr2){
	let result =[]	
	for(let char=0;char<arr.length;char++){
		let el = arr[char];
		let fc = arr2[char]
		let currentVal = fc(el)();
		result.push(currentVal)
	
	}
	
	return result;
}

function mapFc(arr){
	return ()=>{
		return arr*1
	}

}
function mapFc2(element){
	return ()=>element*3;

}
function mapFc3(arr){
	return ()=>{
		return arr*3
	}

}
function mapFc4(arr){
	return ()=>{
		return arr*4
	}

}

let array = [mapFc,mapFc2,mapFc3,mapFc4];
let firstArr = [1,2,3,4];


console.log(each(firstArr,array))
*/