//Has Array
const hasArray = (arr)=>{
	let res
	for(let item of arr){
		if(Array.isArray(item)){
			return res = true

		}else{
			res = false

		}

	}
	return res

}
console.log(hasArray([3,'asdasd',{}]))

