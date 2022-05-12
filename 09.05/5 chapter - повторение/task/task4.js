// https://www.codewars.com/kata/55c04b4cc56a697bb0000048/javascript

function scramble(str1, str2) {
	let res;
	let arr =[];
	let str  = str2
	let newArr = []
	str1 = Array.from(str1)
	str2 = Array.from(str2)
	for(let it of str2){
		str1.find((el)=>{
			if(it.includes(el)){
				return arr.push(el)
			}else{
				return newArr.push(it)
			}
		})

	}
	arr =arr.join('');
	console.log(arr)
	console.log(newArr)
	if(arr==str){
		return true
	}else{
		return false
	}

		
}
console.log(scramble('cedewaraaossoqqyt','codewars'))
