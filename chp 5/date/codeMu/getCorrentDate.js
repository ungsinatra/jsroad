// Выведите на экран текущую дату-время в формате '12:59:59 31.12.2014'. Для решения этой задачи напишите функцию, которая будет добавлять 0 перед днями и месяцами, которые состоят из одной цифры (из 1.9.2014 сделает 01.09.2014).

function getCorrentDate(){
	let date = new Date();
	let year = addZero(date.getFullYear());
	let month = addZero(date.getMonth());
	let day = addZero(date.getDate());

	return `${date.getHours()}.${date.getMinutes()}.${date.getSeconds()} ${day}.${month}.${year}`

}

console.log(getCorrentDate())//12.37.30 29.04.2022


function addZero(date){
	return (date<10)?date = '0'+date:date

}