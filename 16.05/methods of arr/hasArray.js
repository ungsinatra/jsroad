
function hasArrys(arr){
	let res=arr.some(el=>{
		if(Array.isArray(el)){
			return el
		}
	})
	return res 
}
console.log(hasArrys([{},2,3,[]]))//true