// Если переменная a больше нуля - то в ggg запишем функцию, которая выводит один !, иначе запишем функцию, которая выводит два !.
'use strict'

function getValuesA(a){
	 if(a>0){
		 let ggg =function (){
			return '!!'

		}

		return ggg()
	 }else{
		let ggg =function(){
			return '!'
		}
		return ggg();

	 }

}


console.log(getValuesA(0))