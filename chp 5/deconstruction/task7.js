//! Модифицируйте полученный выше код так, чтобы при отсутствии в массиве значения для месяца по умолчанию брался текущий месяц, а при отсутствии значения для года - соответственно текущий год. 

function func() {
	return (new Date).getMonth();
}
function getYear (){

	return (new Date).getYear();
}
let arr = [,,15]
let [year=getYear(),month=func(),day] =arr;
console.log(month) 