/*
function getPow(n,sqr){
	if(sqr===1){
		return n
	}
	return n*getPow(n,sqr-1)

}

console.log(getPow(2,5))
*/

function factorial(n){
	if(n===1){
		return n 
	}
	return n*factorial(n-1)
	
}

console.log(factorial(5))


