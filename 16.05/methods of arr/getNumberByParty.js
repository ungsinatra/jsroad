function getNumberByParty(arr,str){
	str = str.toLowerCase();
	const newArr = arr.filter(el=>{
		if(str==='even'){
			return el%2==0
		}else if(str ==='odd'){
			return el%2==1
		}

	})
	return newArr

}
console.log(getNumberByParty([1,2,3,4,5,6],'EVEN'))//[2,4,6]