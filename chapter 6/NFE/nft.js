
function getName(){
	console.log('hi')


}

console.log(getName.name)



const newArr =()=>{
	return console.log('elena')

}

console.log(newArr.name)



function f2(sayhi = function(){}){
	console.log(sayhi.name);

}

console.log(f2())



function makeCounter() {

	function counter() {
	  return counter.count++;
	};
  
	counter.count = 0;
  
	return counter;
  }
  
  let counter = makeCounter();
  
  counter.count = 10;
  console.log( counter() ); // 10
  console.log( counter() ); // 10
  console.log( counter() ); // 10
  console.log( counter() ); // 10



function showName() {}

console.log(showName.name); //showname

const newNAme = showName;

console.log(newNAme.name);

const call = (...arg) => {};

console.log(call.length); //0

//----------------------------

function wathThis() {
  function counter() {
    // return ++wathThis.counter
    return counter.count++;
  }
  counter.count = 0;

  return counter;
}

const newFn = wathThis();
console.log(newFn());
console.log(newFn());
console.log(newFn());

function sayhi() {
  return ++sayhi.counter;
}

sayhi.counter = 0;

console.log(`COUNTER: ${sayhi.counter}`);

console.log(sayhi());
console.log(`COUNTER: ${sayhi.counter}`);

//-----------------------------------------

const fn = function getName(n) {
  if (n == 1) {
    return n;
  }
  return n * getName(n - 1);
};

console.log(fn(5));


const work = fn;
console.log(work(5))




function makeCounter() {

	counter.count = 0;
	function counter() {
	  return ++counter.count;
	};
	counter.set  = function(value){
		counter.count = value;

	}
	counter.descrease = function(){
		counter.count--;

	}
	return counter;
}
  
  let counter = makeCounter();
  
  counter.set(5);
  counter.descrease()
console.log(counter())