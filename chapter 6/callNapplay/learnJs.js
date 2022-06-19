// Декоратор-шпион
// важность: 5


function work(a,b){
	return a+b
}

function spy(fn){
	spy.call  = new Array()
	return function(){
		let arg = [...arguments];
		spy.call.push([].join.call(arguments))
		let res = fn.apply(this,arguments)
		return res
	}
}



let work2 = spy(work);
work2(1,2)
work2(1,3)


for(let char of spy.call){
	console.log(`CALL:${char}`)
}


// Задерживающий декоратор
// важность: 5


function f(x){
	console.log(x)
	
}
function delay(fc,delay){

	return function(){
		setTimeout(() => {
			fc.apply(this,arguments)
		}, delay);

	}

}

/*
 function delay(fc,delay)	
 	return function(){
 		setTimeout(fc,delay,[].join.call(arguments))
 		return
 	}
*/

// }
let f1000 = delay(f,1000)
let f1500 = delay(f,1500)

console.log(f1000('text'))
console.log(f1500('text'))



// Декоратор debounce
// важность: 5

//==================================

function debounce(f, ms) {

	let isCooldown = false;
  
	return function() {
	  if (isCooldown) return;
  
	  f.apply(this, arguments);
  
	  isCooldown = true;
  
	  setTimeout(() => isCooldown = false, ms);
	};
  
  }

  let f = debounce(alert, 1000);

f(1); // выполняется немедленно
f(2); // проигнорирован


setTimeout( () => f(3), 100); 
setTimeout( () => f(4), 1100); 
setTimeout( () => f(5), 1500); 




//==========================================


function f(a) {
	console.log(a)
}
  

function throttle(f,delay){
	let steck = null
	let status = false;
	return function (){
		if(status){
			return 
			steck--
		}
	
		setTimeout(function(that){
			that = this
			status = false;
			steck++;
			f.apply(this,arguments)
		},delay)
		

	}

}

// f1000 передаёт вызовы f максимум раз в 1000 мс
let f1000s = throttle(f, 1000);

console.log(f1000s(1)); // показывает 1
console.log(f1000s(2)); // (ограничение, 1000 мс ещё нет)
console.log(f1000s(3)); 