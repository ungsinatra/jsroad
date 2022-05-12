//! Пусть дана коллекция Map. Получите массив ее элементов и переберите их циклом for-of. 

let someAr1 = [1,2,3];
let someAr2 = [4,5,6];
let someAr3 = [7,8,9];


let someObj1  = {a: 1, b: 2, c: 3};
let someObj2  = {a: 4, b: 5, c: 6};
let someObj3  = {a: 7, b: 8, c: 9};


let map = new Map();

map.set(someObj1,someAr1)
	.set(someObj2,someAr2)
	.set(someObj3,someAr3);

function getValues(callation){
	let value  =[]
	for(let val of callation.values()){
		value.push(val)
	}
	return value
}

console.log(getValues(map))