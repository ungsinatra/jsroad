function sumTo(num) {
  if (num === 1) {
    return num;
  }
  return num + sumTo(num - 1);
}

console.log(sumTo(5));

//----------------------------

function getNumbers(number) {
  // for(let i = 1;i<=number;i++){
  // 	console.log(i)
  // }
  let counter;
  if (number == 1) {
    return 1;
  }
  return number + " " + getNumbers(number - 1);
}

console.log(getNumbers(10));

//---------------------------------

function getInterval(a, b) {
  if (a === b) {
    return a;
  }
  return b + " " + getInterval(a, b - 1);
}

console.log(getInterval(1, 5)); // 5 4 3 2 1

//------------------------------------
function fuc(n) {
  if (n === 1) {
    return 1;
  }
  return n * fuc(n - 1);
}

console.log(fuc(4));

//---------------------------------
function fub(n) {
  if (n <= 2) {
    return 1;
  }
  return fub(n - 1) + fub(n - 2);
}

console.log(fub(77));

//-----------------------------------


function printList(list) {
  for (let value of Object.values(list)) {
    if (value instanceof Object) {
      printList(value);
    } else {
		if(value){
			console.log(value)
		}
    }
  }
}

/*
function printList(list){
	console.log(list.value);
	if(list.next){
		printList(list.next)

	}

}
*/


let list = {
	value: 1,
	next: {
	  value: 2,
	  next: {
		value: 3,
		next: {
		  value: 4,
		  next: null,
		},
	  },
	},
  };



//--------------------------------
function printFromLast(list){
	if(list.next){
		printFromLast(list.next)
	}
	console.log(list.value)	

}
console.log(printFromLast(list));


