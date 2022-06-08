let phrase = "Hello";

if (true) {
  let user = "John";

  function sayHi() {
    return (`${phrase}, ${user}`);
  }

}
const sayHi1 = sayHi;
console.log(sayHi1())

// -------------------------------------------------------------------------
// Напишите функцию sum, которая работает таким образом: sum(a)(b) = a+b.

// Да, именно таким образом, используя двойные круглые скобки (не опечатка).

function sum(a){

	return function(b){
		return a+b;
	}

}
let reslult	 = sum(2)(2);
console.log(reslult)//4

// ------------------------------------------------------------------------------
Армия функций
function makeArmy() {
	let shooters = [];

	let i = 0;
	while (i <= 10) {
	  let shooter = function() { // функция shooter
		return i; // должна выводить порядковый номер
	  };
	  shooters.push(shooter());
	  i++;
	}

	return shooters;
  }

  let army = makeArmy();
console.log(army)

function makeArmy() {
	let shooters = [];

	let i = 0;
	while (i < 10) {
	  let shooter = function() { // функция shooter
		return i ; // должна выводить порядковый номер
	  };
	  shooters.push(shooter);
	  i++;
	}

	return shooters;
  }

  let army = makeArmy();

  console.log(army[0]()); // у 0-го стрелка будет номер 10
  console.log(army[5]()); // у 0-го стрелка будет номер 10

// --------------------------------------------------------------
// Сортировать по полю

 let users = [
   { name: "John", age: 20, surname: "Johnson" },
   { name: "Pete", age: 18, surname: "Peterson" },
   { name: "Ann", age: 19, surname: "Hathaway" },
 ]
 function byField(that) {
   let element = that;
 	return (a,b)=>(a[element]>b[element])?1:-1
 }
 users.sort(byField('name'));
 users.forEach(el=>console.log(el.name))

// ---------------------------------------------
//У нас есть встроенный метод arr.filter(f) для массивов. Он фильтрует все элементы с помощью функции f. Если она возвращает true, то элемент добавится в возвращаемый массив.

//Сделайте набор «готовых к употреблению» фильтров:

    inBetween(a, b) – между a и b (включительно).
     inArray([...]) – находится в данном массиве.

 Они должны использоваться таким образом:

     arr.filter(inBetween(3,6)) – выбирает только значения между 3 и 6 (включительно).
     arr.filter(inArray([1,2,3])) – выбирает только элементы, совпадающие с одним из элементов массива


alert( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

alert( arr.filter(inArray([1, 2, 10])) ); // 1,2


let arr = [1, 2, 3, 4, 5, 6, 7];

function inBetween(first,second){
	
	return el=>{
		return el>=first&&el<=second
	}
}
let reslult = arr.filter(inBetween(3,6));
console.log(reslult)//[3,4,5,6]


function inArray(array){

	return (el,id)=>{
		return el===array[id]

	}
}
let res  = arr.filter(inArray([1,2,10]));//[1,2]

console.log(res)


function inArray(arr) {
  return function (x) {
    return arr.includes(x);
  };
}

let arr = [1, 2, 3, 4, 5, 6, 7];
alert(arr.filter(inArray([1, 2, 10])));
