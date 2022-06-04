/*
Напишите функцию, которая будет принимать параметрами произвольное количество чисел и возвращать их среднее арифметическое (сумма делить на количество).
function getAverage(...numbers){
	let cout = 0;
	numbers.forEach(element => {
		cout+=element
	});
	return cout/numbers.length;
}
console.log(getAverage(1,2,3,4,5))
*/


// function getConcat(...arr){
// 	console.log(arr)
// 	return [].concat(...arr)

// }

// console.log(getConcat([1,2,3],[4,5,6]))


// let arr = [].concat([[1,2,3],[1,2,3]])


// // let newArr = [...arr]
// console.log(arr)


// let arr = [1,2,3];
// let newrr  = [[4,5,6],[7,8,9]];
// let res = []
// console.log(res.concat(arr,...newrr))// spread [1, 2, 3, 4, 5,6, 7, 8, 9]



function getInt(arr1, arr2) {
	let result = [];
	
	for (let elem of arr1) {
		if (inArray(elem, arr2)) {
			result.push(elem);
		}
	}
	
	return result;
}

function inArray(elem, arr){
	return arr.includes(elem);
}


console.log(getInt([1, 2, 3], [2, 3, 4]))