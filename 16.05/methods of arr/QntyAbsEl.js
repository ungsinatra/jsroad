// Дан массив с числами. Посчитайте количество отрицательных чисел в этом массиве. 


function qntAbd (array){
	const qnty = array.filter(el=>{
		return el<0
	})

	return qnty.length;

}
console.log(qntAbd([1,2,3,4,-1,-23,0,-2]))//3
