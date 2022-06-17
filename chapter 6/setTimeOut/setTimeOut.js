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




setTimeout(() => {
	console.log('ssss')
}, 10000);



function getRes(a,b){
	console.log(a+b)

}

 let stop = setTimeout(getRes,1000,20,20);
 clearTimeout(stop)
 console.log(+stop)





 let counter = 0;
const interval = setInterval(()=>{
	console.log(counter+=1)
},500)


setTimeout(()=>{
	clearInterval(interval);
	console.log('stop')

},5000)





