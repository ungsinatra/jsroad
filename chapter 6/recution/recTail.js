function recursionTail(num,count=0){
	'use strict'
	if(num===0){
		return count
	}	
	return recursionTail(num-1,count+num)
}


console.log(recursionTail(10000))

function withoutTail(n){
	if(n===0){
		return n
	}
	return n+withoutTail(n-1)

}
console.log(withoutTail(1000))
//------------------------------------------------

function getNumbers(num,corrent=0){
	if(num<=0){
		return corrent
	}
	return num + ' '+getNumbers(num-1,corrent+1);
}

console.log(getNumbers(5))


//-----------------------------------------------



//--------------------------------------------
function fubTail(n,stop=0){
	if(n<=2){
		return stop+1 
	}
	return fubTail(n-1)+fubTail(n-2)

}
console.log(fubTail(7))


//-----------------------------------------


function sequenSum(a, b) {
	if (a == b) {
	  return a;
	} else if (a > b) {
	  return NaN;
	}
	return b + sequenSum(a, b - 1);
  }
  
  console.log(sequenSum(1, 5));


function sequenSumTail(a,b,corrent = 0){
	if(a==b){
		return corrent
	}
	else if(a>b){
		return NaN

	}
	return b+sequenSumTail(a,b-1,corrent+1)

}


console.log(sequenSumTail(1,5))