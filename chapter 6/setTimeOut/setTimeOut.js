// function getStr(){

// 	console.log('GG')

// }


// setTimeout(getStr,100)



function getSum(a,b){
	let c =0;
	 c = a+b
	 console.log(c)
}

/*
let timeId = (setTimeout(getSum,1000,12,23))


clearTimeout(timeId)
*/

/*
let setId = setInterval(getSum,1000,2,3)

setTimeout(() => {clearInterval(setId);
	console.log('stop it ')
	
},2000);


*/


let i = 1;
setInterval(function() {
  func(i);
}, 100);