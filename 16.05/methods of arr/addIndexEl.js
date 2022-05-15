// Дан массив с числами. Используя метод map запишите в каждый элемент массива значение этого элемента, умноженное на его порядковый номер в массиве. 


function addIndexEl(arr){
	const newArr = arr.map((el,id)=>{
		return el*id;
	})
	return newArr
}
console.log(addIndexEl([1,2,3,4,5]))//[ 0, 2, 6, 12, 20 ]