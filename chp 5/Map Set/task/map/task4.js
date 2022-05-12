// !Пусть дана коллекция Map. Получите массив ее ключей и переберите их циклом for-of. 


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



function getKeyOFMap (el){
	let arrKey = []
	for(let key of el.keys()){
		arrKey.push(key)

	}
	return arrKey
}

console.log(getKeyOFMap(map))