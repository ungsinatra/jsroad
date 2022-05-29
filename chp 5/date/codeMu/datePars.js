// Выведите на экран количество часов, прошедшее между 1 марта 1988 года и текущим моментом с помощью Date.parse
let nowDate	 = new Date()
let date = new Date('1988-02')
	
let hours = Math.round(nowDate.getTime()-date.getTime()/(1000*60*60) )


console.log(hours)