// Дан массив со строками. Используя метод map в конец значению каждого элемента массива добавьте символ '!'. 


function ExclamationPoint(array){
	const res  = array.map(el=>{
		return (typeof el !=='object')?el+'i':el
	})
	return res
}
console.log(ExclamationPoint([1,[],2,3,4]))//[1i,[],2i,3i,4i]