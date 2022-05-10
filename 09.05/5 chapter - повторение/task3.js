// MoveToStart

function moveToStart(arr,n){
	let newArr = arr.splice(0,n-1)
	let res = arr.concat(newArr)
	return res
}

console.log(moveToStart([1,2,3,4,5],4))