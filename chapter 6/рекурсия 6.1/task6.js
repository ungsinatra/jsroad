// Задачи на методы массивов и рекурсии
// sequenceSum
function sequenceSum(start,end){
	if(start ===end){
		return start
		
	}else if (start>end){
		return NaN
	}
	else{
		return end+sequenceSum(start,end-1)
	}

}
console.log(sequenceSum(1,5))//15
console.log(sequenceSum(4,10))//49
console.log(sequenceSum(6,6))//6