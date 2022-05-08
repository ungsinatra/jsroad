let obj = {
	salaries : 1200,
	week : 200,
	day : 1200
}


// let arr = [1200,200,1200];
// let res = 0;
// let newArr =arr.map(el=>{

// 	return res +=el
// })
// console.log(res)
let valuesObj = Object.values(obj);
let res = 0;
let AllValues = valuesObj.map(el=>{
	
	return res+=el*2

})
console.log(res);