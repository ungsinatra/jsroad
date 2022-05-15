const moveToStart=((arr,n)=>{
	// let copyArr = arr.slice()
	let [...copyArr]=arr;
	const res = copyArr.splice(-n).concat(copyArr);
	return res;
	
})

console.log(moveToStart(([1,2,3,4,5]),3))//[3,4,5,1,2];
console.log(moveToStart(([1,2,3,4,5]),10))//[1,2,3,4,5];