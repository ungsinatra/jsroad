// Модифицируйте предыдущую задачу так, чтобы отсчет доходил до 0, а затем каждый последующий вызов функции выводил на экран сообщение о том, что отсчет окончен. 


function newFc(){
	let num = 10
	return ()=>{
		return (num>0)?--num:` отсчет окончен,num:${num}`

	}

}

let  newfunction = newFc();// return arrow fc

console.log(newfunction())
console.log(newfunction())
console.log(newfunction())
console.log(newfunction())
console.log(newfunction())
console.log(newfunction())
console.log(newfunction())
console.log(newfunction())
console.log(newfunction())
console.log(newfunction())
console.log(newfunction())//отсчет окончен,num:0
console.log(newfunction())//отсчет окончен,num:0


