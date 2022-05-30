// Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут. Временная зона – местная.

/*
let date = new Date(2012,1,20,3,12)

alert(date)
*/




// Напишите функцию getWeekDay(date), показывающую день недели в коротком формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».


/*
function getWeekDay(date){
	const week ='ВС,ПН,ВТ,СР,ЧТ,ПТ,СБ,';
	weekDays = week.split(',')
	let day = weekDays[date.getDay()];
	return day
	
}


let date = new Date(2012, 0, 3)
console.log(getWeekDay(date))
*/
/*
Создайте функцию getDateAgo(date, days), возвращающую число, которое было days дней назад от даты date.

К примеру, если сегодня двадцатое число, то getDateAgo(new Date(), 1) вернёт девятнадцатое и getDateAgo(new Date(), 2) – восемнадцатое.

Функция должна надёжно работать при значении days=365 и больших значениях:

*/

/*
function getDateAgo(date,days){
	date.setDate(date.getDate()-days)
	return date.getDate()
}

let date = new Date(2015, 0, 2);


console.log(getDateAgo(date,1))
console.log(getDateAgo(date, 2))
console.log( getDateAgo(date, 365))
*/

/*
Напишите функцию getLastDayOfMonth(year, month), возвращающую последнее число месяца. Иногда это 30, 31 или даже февральские 28/29.

Параметры:

    year – год из четырёх цифр, например, 2012.
    month – месяц от 0 до 11.

К примеру, getLastDayOfMonth(2012, 1) = 29 (високосный год, февраль).





function getLastDayOfMonth(year,month){
	let newDate = new Date(year,month);
	console.log(newDate.getDate())

}


getLastDayOfMonth(2012,1)

*/

/*
Напишите функцию getSecondsToday(), возвращающую количество секунд с начала сегодняшнего дня
Например, если сейчас 10:00, и не было перехода на зимнее/летнее время, то:


function getSecondsToday(){
let nowDate = new Date();

let todayDate = new Date(nowDate.getFullYear(),nowDate.getMonth(),nowDate.getDate())
let resOfSeconds = nowDate-todayDate;
return Math.round(resOfSeconds/1000)


}

console.log(getSecondsToday());
*/



/*
Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты.

Например, если сейчас 23:00, то:



function getSecondsToTomorrow(){
	let nowDate = new Date();
	let tomorrowDate = new Date(nowDate.getFullYear(),nowDate.getMonth(),nowDate.getDate()+1);
	let res = Math.round((tomorrowDate.getTime()- nowDate.getTime())/1000)
	return res


}
console.log(getSecondsToTomorrow());

*/