
function hasArrys(arr){
	let res;
		arr.find(el=>{
		if(Array.isArray(el)){
			return res = true
		}
		return res = false
	})
	return res 
}
console.log(hasArrys([{},2,3,[]]))//true