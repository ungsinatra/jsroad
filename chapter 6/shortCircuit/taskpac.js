'use strict'
// function func() {
// 	let num = 0;
	
// 	return function() {
// 		return num++;
// 	};
// };

// let test = func;
// console.log(test()())
// console.log(test()())
// console.log(test()())




// let num = 1;

// function test() {
// 	return function() {
// 		return 	num++;
// 	};
// };

// let func1 = test(); // первый счетчик
// console.log(func1())  //выведет 1
// console.log(func1())  //выведет 2

// let func2 = test()
// console.log(func2())//3
// console.log(func2())//4



/*
let counter = 0;
		
function test() {
	return function() {
		
		return counter++;
	};
};

let func = test;//funciotn test(){}

let func1 = func();//return function(ananimus){}
let func2 = func();//return function(ananimus){}
console.log(func1());//0
console.log(func2());//1
console.log(func1());//2
console.log(func2());//3
*/


/*??
function test() {
	let counter = 0;
	
	return function() {
		return function() {
			
			return counter++;
		};
	};
};

let func = test()();
console.log(func)//function(ananimus)

let func1 = func;
let func2 = func;
console.log(func1());//0
console.log(func2());//0
console.log(func1());//1
console.log(func2());//2

*/



/*
function test() {
	let counter = 0;
	return function() {
		return function() {
			return ++counter;
		};
	};
};

let func = test();//function(ananimus)

let func1 = func();//function(ananimus)
let func2 = func();//function(ananimus)
console.log(func1())//1
console.log(func2())//2
console.log(func1())//3
console.log(func2())//4
*/


function test() {
	return function() {
		let counter = 0;
		return function() {
			return ++counter;
		};
	};
};

let func = test();//function(ananimus)

let func1 = func();//function(ananimus)
let func2 = func();//function(ananimus)
console.log(func1())//1
console.log(func2())//1
console.log(func1())//2
console.log(func2())//2


