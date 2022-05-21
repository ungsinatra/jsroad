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


const set = new Set();
let  text= document.querySelector('#p')
let str = ''
document.querySelector('#button').onclick = ()=>{
	let newInput = document.querySelector('#input').value;
	str+=newInput
	text.textContent = newInput
	
}
console.log(str)

*/

/*

Пусть дан массив. С помощью Set получите этот же массив, но без дублей.


function getUniqe(arr){
	let set  = new Set(arr)

	let setArr = Array.from(set)


	return  setArr;

}


console.log(getUniqe([1,2,3,4,5,3,2,45]))


*/

/*
Даны абзацы и кнопка. Пользователь кликает на эти абзацы в произвольном порядке. Сделайте так, чтобы по нажатию на кнопку в конец каждого абзаца, на который был совершен клик, был добавлен восклицательный знак.

let newSet = new Set();
let p  = document.querySelectorAll('p');


for(let char of p){
	char.addEventListener('click',function(){
		newSet.add(this)
	

	})

	
}



let bnt  = document.querySelector('button');
bnt.addEventListener('click',()=>{

	for(let char of newSet){
		char.textContent+='!';
		
		
	}
	
})

*/


// Map

/*
Задача :

Пусть даны 3 массива. Создайте коллекцию Map, сделайте ключами коллекции эти массивы, а значениями - какие-нибудь строк



let arr  = [1,2,3]
let arr2  = [1,2,3]
let arr3  = [1,2,3]
let newMap = new Map()
newMap.set(arr,'1')
newMap.set(arr2,'2')
newMap.set(arr3,'3')

console.log(newMap)

*/


/* Переберите циклом for-of коллекцию, созданную в предыдущей задаче.

for(let char of newMap){
	console.log(char);

}

*/


/*
Пусть дана коллекция Map. С помощью метода keys получите массив ее ключей и переберите его циклом for-of
Пусть дана коллекция Map. С помощью метода values получите массив ее значений и переберите его циклом for-of.


for(let char of newMap.keys()){
	console.log(char)
	
}

for(let char of newMap.values()){
	console.log(char)
	
}
*/


/*
Задача :

Пусть даны абзацы. Переберите эти абзацы циклом и создайте коллекцию Map, ключами в которой будут абзацы, а значением - их порядковый номер на странице. Сделайте так, чтобы по клику на любой абзац ему в конец записывался его порядковый номер.


*/


let p1 = document.querySelectorAll('p');
let map = new Map();

let count = 1;
for(let char of p1){
	map.set(char,count);
	count+=1;
	for(let el of map.values()){
		console.log(el)
		char.addEventListener('click',()=>{
			char.textContent = el
		
		})
	}
	
}
console.log(map)


