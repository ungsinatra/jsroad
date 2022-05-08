//! Напишите функцию printList(list), которая выводит элементы списка по одному.
let list = {
	value: 1,
	next: {
	  value: 2,
	  next: {
		value: 3,
		next: {
		  value: 4,
		  next: null
		}
	  }
	}
  };

function printList(obj){
	console.log(obj.value);
	if(obj.next){
		return printList(obj.next)
	}
}
console.log(printList(list))