// Пусть даны 3 объекта и 3 массива. Создайте коллекцию Map, сделайте ключами коллекции объекты, а значениями - соответствующие массивы


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


console.log(map)