// Функция ggg принимает 2 параметра: число и анонимную функцию, которая возводит число в квадрат. Возведите число в 4-тую степень с помощью ggg.
'use strict'

function ggg(num, func){
	
	return func(num);

}


console.log(ggg(4,function(that){
	return that**4
}))

