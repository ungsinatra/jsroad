// !Массивы

const myArray = [1, "sad", true];

myArray.length;
const myArray2 = [1, "sad", true];

myArray === myArray2; //!false так как ссылка у них разное

const copyArrray = myArray;
copyArrray === myArray; //!true так как тут мы копирем ссылку на массив

const nArray = [1, 2, 3, 4, 5, 6, 7];
nArray[4] = "abs";
nArray[7] = "Привет";

nArray.push(true); //!метод котоый добаляет новый элемент
const delel = nArray.pop(); //! удаляет полседний элемент
nArray.unshift("первый"); //!добвление элемента в сначала массива
nArray.shift();

nArray.forEach((g) => console.log(g * 2)); // ! медот forEach
const newArray = nArray.map((f) => f * 4);
console.log(newArray);
console.log(nArray);
/ !Методы массива splice

// let arras = ["Я", "изучаю", "JavaScript", "прямо", "сейчас"];

// // удалить 2 первых элемента
// let removed = arras.splice(0, 2);

// console.log(removed)

// !slice 
// let arras = ["Я", "изучаю", "JavaScript", "прямо", "сейчас"];

// let newa ;
// newa = arras.slice(2,4)
// console.log(newa)


// !conact()

// let arras = ["Я", "изучаю", "JavaScript", "прямо", "сейчас"];

// let af =arras.concat([1,2],['s'])
// console.log(af)
// !forEach
let arras = ["Я", "изучаю", "JavaScript", "прямо", "сейчас"];
arras.forEach((it,id,arr) =>{
  console.log(`${id}  `)
})
//* let arr = [2,4,56,7,8,9];
//* let newArr=[];
//* arr.forEach(function (el,i){
//* 	arr.addEventListener('click',() =>{
	*
//* 	})
//* })



// ! find findindex

// let users = [{id:1,same:'vacz'},{id:2,same:'Pert'},{id:3,same:'sardor'}];
// let findName = users.find((item =>{
//    return item.id==1;
// }))
// console.log(findName);


// !filter 
let users = [{id:1,same:'vacz'},{id:2,same:'Pert'},{id:3,same:'sardor'}];
let newFillter = users.filter((el,index) =>{
  return el.id<3
})
newFillter[0]={id:2,same:'sss'};
console.log(newFillter)
console.log(users)
// !map
let massive = [1,2,4,6,7];
let newMassive = massive.map(el=>{
  return el*2;
})
console.log(newMassive)


//! Напишите функцию sortByAge(users), которая принимает массив объектов со свойством age и сортирует их по нему./
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arr = [ vasya, petya, masha ];
arr.sort((a,b)=>{
	if(a.age>b.age){
		return 1 
	}else{
		return -1
	}
})
console.log(arr)
