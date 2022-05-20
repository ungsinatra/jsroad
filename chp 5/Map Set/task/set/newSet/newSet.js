/*
Задача 1:

Создайте пустую коллекцию Set. С помощью метода add добавьте в нее элементы со значениями 1, 2 и 3.


const set = new Set();
set.add(2)
set.add(1)
set.add(3)
set.add(3)
set.add(5)
console.log(set)//
*/


/*
Задача 2:

Создайте коллекцию Set с начальными значениями 1,2,3. С помощью свойства size выведите на экран количество элементов в коллекции.


const set = new Set();
set.add(1)
	.add(2)
	.add(3)


console.log(set.size)//3
*/


/*
Задача 3:

Создайте коллекцию Set с начальными значениями 1,2,3. С помощью метода has проверьте наличие элемента со значением 3, а затем элемента со значением 4.


const set = new Set([1,2,3]);
console.log(set.has(1))//true
console.log(set.has(4))//fasle
*/

/*Задача 4:

Дан массив с числами. С помощью цикла и метода add добавьте все элементы этого массива в коллекцию Set.






const arr = [1,2,3,4,5,2,3,4];
let set = new Set()
for(let char of arr){
	set.add(char)
		
}
console.log(set)

*/
/*
Задача 4:

Модифицируйте предыдущую задачу так, чтобы в коллекцию добавлялись только четные числа из массива, а нечетные - игнорировались.



const arr=[1,2,3,4,5,6];
const newSet = new Set()
arr.forEach(el=>{
	if(el%2==0){
		newSet.add(el)
	}
})
console.log(newSet)
*/


/*
Задача 5:

Дана коллекция Set со значениями 1,2,3. С помощью цикла for-of переберите ее значения и выведите в консоль.

const set = new Set([1,2,3]);
for(let char of set){
	console.log(char)//1,2,3
}

*/

/*
Задача 6:

Дана коллекция Set с некоторыми числовыми значениями. Найдите сумму этих значений.



const set  = new Set([1,2,3,4,32,5,6,7,7,7]);

let newArr = Array.from(set);

let tottal = 0;
newArr.reduce((acc,el)=>{
	return tottal=acc+=el;
})
console.log(tottal)//60
*/

/*
Задача 7:

Дан инпут и кнопка. Пользователь вводит в инпут число и жмет на кнопку и делает так произвольное количество раз. Сделайте так, чтобы каждый раз под инпутом в абзац через запятую выводился список всех введенных пользователем чисел, но без дублей.
*/

const set = new Set();
let  text= document.querySelector('#p')
let str = ''
document.querySelector('#button').onclick = ()=>{
	let newInput = document.querySelector('#input').value;
	str+=newInput
	text.textContent = newInput
	
}
console.log(str)
