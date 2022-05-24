function makeCounter(){
	let count = 0;
	function counter(a){
		return count++;

	}

	counter.count = counter.set;
	counter.set = value =>count = value;
	counter.decrease = ()=>count--;

	return counter;

}



let counter = makeCounter();
  
console.log( counter() ); // 0
console.log( counter() ); // 1

counter.set(9); // установить новое значение счётчика
console.log( counter() ); // 9
counter.decrease(); // уменьшить значение счётчика на 1
console.log( counter() ); // 9
console.log( counter() ); // 10


