// let arr = [1,2,3,4,5]
// function getCount(num1, num2, num3, num4, num5){
// 	let res = num1 + num2 + num3 + num4 + num5
// 	console.log(num1)
// 	return res
// }
// console.log(getCount(...arr))



// function getSum(n1,n2,n3,n4,n5,n6,n7,n8){
// 	return (n1+n2+n3+n4)*(n5+n6+n7+n8)

// }


// console.log(getSum(1,...[2,3,4],5,...[6,7,8]))




// let str = 'sdasdasdasd';
// arr = [...str].forEach(el=>console.log(el))
// console.log(arr)


/*
const foo = function(a,b,...c){
	let res = 0;
	console.log(c)
	for(let char of c){
		res +=Number(char)+a+b
			
	}
	return res

}

console.log(foo(1,2,3,4,5,6,7))
*/


let obj = {
	name:'sardor',
	age: 15

}


let arr  = [1,2,3,4,5]
const arr2 = [{},['asdasd'],{...obj}]


let copyObj = {...obj};


const newArr = [...arr,...arr2]
console.log(copyObj)//obj
console.log(newArr)//arr

let str = 'GoodBye'
let newArr21  = [...str];
console.log(newArr21)



"use strict"
function getError(...sss){
	return sss

}
console.log(getError(1,2,3,4))


