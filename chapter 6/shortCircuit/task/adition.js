// Создайте замыкание: функция addition получает число n и возвращает внутреннюю функцию. Эта функция также получает число, прибавляет его к n и возвращает результат.



function adition(number){
	return (num)=>{
		
		let sum = number+num
		return sum
			
	}

}

getNumber = adition(15);
console.log(getNumber(10));

