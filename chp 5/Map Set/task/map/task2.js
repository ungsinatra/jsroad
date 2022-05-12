// !Пусть даны 3 массива. Создайте коллекцию Map, сделайте ключами коллекции эти массивы, а значениями - какие-нибудь строки.
let someAr1 = [1,2,3];
let someAr2 = [4,5,6];
let someAr3 = [7,8,9];

let someSrt1 = 'someStr'
let someSrt2 = 'someStr2'
let someSrt3 = 'someStr3'

let map = new Map();

map.set(someAr1,someSrt1)
	.set(someAr2,someSrt2)
	.set(someAr3,someSrt3);

console.log(map)
//*Map(3) {
//*	[ 1, 2, 3 ] => 'someStr',
//*	[ 4, 5, 6 ] => 'someStr2',
//*	[ 7, 8, 9 ] => 'someStr3'
//*  }

