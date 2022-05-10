//!------------------------------------number--------------------------
let n = 12.1213;
let newN = n.toPrecision(3)//12.1 выводит кол цифр как срока


let newNumber = 1.2326;
let newNEWNUber = newNumber.toFixed(3)//1.233 в аргументе занчение после запятой,вывод строки и окрг до бл хначение

let num = 5.56789;
let na = num.toFixed(3);//5.568

console.log(newNEWNUber)
let newNa = 11.5
let newNA = Math.floor(newNa)//11 окрг в мень сторону
console.log(newNA)


let a = 12.2
console.log(Math.ceil(a))//13



let s  =12.5;
console.log(Math.round(s))//13 окр до ближ


let x =12.2
console.log(Math.trunc(x))//12

























function splitAndMerge(string, separator) {

	let newArr = string.split(' ')
	console.log(newArr)
	let newStr = newArr.join(separator)
	return newStr
  }


console.log(splitAndMerge("Hello World!","."))