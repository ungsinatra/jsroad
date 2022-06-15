function makeCounter() {
  counter.count = 0;
  function counter() {
    return counter.count++;
  }
  counter.set = function (value) {
    counter.count = value;
  };
  counter.decrease = function () {
    counter.count--;
  };
  return counter;
}

let counter = makeCounter();

console.log(counter()); // 0
console.log(counter()); // 1

counter.set(9); // установить новое значение счётчика
console.log(counter()); // 9
counter.decrease(); // уменьшить значение счётчика на 1
console.log(counter()); // 9
console.log(counter()); // 10



///--------------------------------

const sum = function getSum(num){
	let number = num
	getSum.valueOf = function(that){
		return that.number

	}
	return getSum.valueOf(this)
}

let resCounter;
resCounter = resCounter + sum(1)(2)(5)
console.log(resCounter)
// sum(1)(2) == 3; // 1 + 2
// sum(1)(2)(3) == 6; // 1 + 2 + 3
// sum(5)(-1)(2) == 6
// sum(6)(-1)(-2)(-3) == 0
// sum(0)(1)(2)(3)(4)(5) == 15