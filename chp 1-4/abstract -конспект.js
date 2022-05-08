"use strict";

//**const storyOFcontry = {
//**	city:'Moscow',
//**	population:12000000,
//**	since:'993 years'

//**}
//**const copyOfcountry = storyOFcontry;
//**copyOfcountry.city = 'osh';

//**const copyThirdCountry = storyOFcontry;
//**copyThirdCountry.population = 800000;

//**copyThirdCountry.popular = true;

//**copyOfcountry.IshaveGay = true;
//**delete copyOfcountry.IshaveGay;
//**const gay = 'isHeGay';
//**copyOfcountry[gay] = 'right';
//**console.log(copyThirdCountry)

//**const  a = ()=>{
//**	console.log("hello world")
//**}
//**a();

//**a= 10;
//**a()

//**const myPerson = {
//**	age:'12 years',
//**	asdasd: function () {
//**		a = 10;
//**		b = 13;
//**		console.log(a+b);
//**	}
//**}
//**myPerson.asdasd();
//**const myPerson = {
//**	age:'12 years',
//**	asdasd(){
//**		a = 10;
//**		b = 13;
//**		console.log(a+b);
//**	}
//**}
//** JSON.stringify(myPerson)

//** const person = {
//**	age:12
//**  }
//**  JSON.stringify(person)
//**  const  personSrt = JSON.stringify(person)
//**  console.log(personSrt)
//**  const personPar = JSON.parse(personSrt)
//**  console.log(personPar)

//**  const person = {
//**	age:12,
//**	body:{
//**		w:120,
//**		h:30
//**	}
//**  }

// ** const person2 = Object.assign({},person);
// ** person2.name = 'sardor';
// ** person2.age = 14;
// ** person2.body.w= (130);

// ** console.log(person);
// ** console.log(person2);

// ** const person2 = {...person};
// ** person2.name = 'sardor';
// ** person2.age = 14;
// ** person2.body.w= (130);
// ** console.log(person);
// ** console.log(person2);

// ** const person2 = JSON.parse(JSON.stringify(person));
// ** person2.name = 'sardor';
// ** person2.age = 14;
// ** person2.body.w= (130);
// ** console.log(person);
// ** console.log(person2);

//! ---------------------------------Функиции

// **function myFN(a, b) {
// **  let c;
// **  a = a + 1;
// **  c = a + b;
// **  return c;
// **}

//** */ console.log(myFN(10, 15));

//**const personOne = {
//**  age: 23,
//**  penis: "14sm",
//**};

//**function callbackFN(callback) {
//**const resultPenin = penisPerson(personOne);
//**console.log(personOne.age);
//**console.log(resultPenin.age);
//**callback();
//**}
//**function penisPerson(person) {
//**  const copyPerson = { ...person };
//**  copyPerson.age += 1;
//**  return copyPerson;
//**}
//**callbackFN(penisPerson);

//**function parityОfТumbers(firstNum, secondNum) {
//**  if (firstNum % 2 == 0 && secondNum % 2 == 0) {
//**    let reselt = firstNum * secondNum;
//**    return reselt;
//**  } else if (firstNum % 2 !== 0 && secondNum % 2 !== 0) {
//**    reselt = firstNum + secondNum;
//**    return reselt;
//**  } else if (firstNum % 2 == 0 || secondNum % 2 == 0) {
//**    reselt = firstNum || secondNum;
//**    return reselt;
//**  }
//**}
//**const log = parityОfТumbers(13333333,200000);
//**console.log(log);

//!callback Fn

//**function printMyName (){
//**  console.log('Privet')
//**}
//**console.log("hi")
//**setTimeout(printMyName, 1000)

//**let a ;
//**let b;

//**function myFN(){

//**  let b;
//**  a= true;
//**  b = 10;
//**  console.log(b)

//**}
//**myFN()

//**console.log(a);
//**console.log(b);

// if (){
//   let a
//   let b
// }

// !оператор разделение обьектов
const btn = {
  color: "red",
  text: "boy",
};

const copybtn = {
  ...btn,
};

const thirdObj = {
  ...btn,
  ...copybtn,
};
console.log(thirdObj);

// !шабонные строки
let name1 = "Sardor";
let city = "Moscow";

const allToGether = `Меня зовут ${btn.color} и я живу в городе ${city}`;
console.log(allToGether);

// ! анониманое функиональное вырожение
setTimeout(function () {
  console.log("sardor");
}, 1000);

// !Стрелочная функция

const fn = (asd, asdas) => {
  asd = 10;
  asdas = 11;
  let saaa = asd + asdas;
};
fn();

const newFn = fn;
console.log(newFn);

// !пример

function newFnByFactoey(firstNum, secondNum = 1) {
  return firstNum * secondNum;
}

console.log(newFnByFactoey(12, 12));
console.log(newFnByFactoey(12));

// !безымяная функция

const asd = function (firstNum, secondNum = 1) {
  return firstNum + secondNum;
};

console.log(asd(12, 12));

// ! стрелочноя функция
const arowFn = (firstNum, secondNum) => {
  return firstNum + secondNum;
};
console.log(arowFn(120, 12));

// ! значение параметров по умалчание  с неявных возратом
const post = {
  idPost: 1,
  title: "title",
  price: "12$",
};

const newPost = (post, addet = Date()) => ({
  ...post,
  addet,
});

const post2 = {
  idPost: 2,
  title: "bla-bla",
  price: "21$",
};

// console.log(newPost(post2))

// !явный возврыт

const newPost3 = (post, addet = Date()) => {
  post = { ...post };
  post.addet = Date();
  return post;
};
console.log(newPost3(post));

// !ОБработка ошибок

//**const fnWError = () =>{
//**  throw new Error('some erroe')
//**}

//**fnWError();
//**console.log('continue...!')

// !try/catch

const fnWError = () => {
  throw new Error("some erroe");
};

try {
  fnWError();
} catch (error) {
  console.error(error);
  console.log(error.message);
}

console.log("continue...!");

// !Инструкции

function exFn(a) {
  console.log(a);
}

const aAA = 10;
const bBB = true;

exFn(aAA);

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

// ! Деструктуризация массива в js
let arr = ["sardor", "Mamyrov", "19 years", "have a dream"];
let [firstName, secondName] = arr;
console.log(firstName);
let [, , years, dream] = arr;
console.log(years);
// ! Деструктуризация массива в js
let [name3, name2, ...rest] = [
  "Julius",
  "Caesar",
  "Consul",
  "of the Roman Republic",
];

console.log(rest);
// ! Деструктуризация массива  поумолчанию в js
let [name6 = "sardor", surname2] = [, "Мамыров"];
console.log(surname2);

// ! Деструктуризация   обектав в js

const obj1 = {
  first: 1,
  second: "2",
  third: "Три",
};

// **const {first,second,third} = obj1;
// **console.log(first)
// **console.log(third)
// **console.log(second)

// ! Деструктуризация   обектав в js

const { first, ...also } = obj1;
console.log(also);

// ! Деструктуризация   обектав в js
let user = {};
[user.name, user.surname] = "Ilya Kantor".split(" ");

console.log(user); // Ilya

// ! Деструктуризация   обектав  передача к другой переменной в js

const { first: pervi, second: vtoroy, third } = obj1;
console.log(pervi);

// !---------------------------
// !метод str indexOF

var str = "Пожалуйста, найдите, где происходит 'размещение'!";
var pos = str.indexOf("размещение");
console.log(pos);

// ! метод доступ к символам
const text1 = "Привет я учу js";

const indexOftext = text1[5]; //! используеться часто
const indexOftext2 = text1.charAt(4);
console.log(indexOftext, indexOftext2);

// !ToLowerCase and ToUpperCase!

const ps = "аааааааааааааааа";
const pz = "bbbbbbbbbbbbbbbbb";
let sff = ps.toUpperCase();
console.log(sff);
console.log(pz.toUpperCase());

// ! indexOf()
let str = "Widget With id";

console.log(str.indexOf("Wi"));

let str2 = "Ослик Иа-Иа посмотрел на виадук";

let target = "Иа"; // цель поиска

let pos = 0;
while (true) {
  let foundPos = str2.indexOf(target, pos);
  if (foundPos == -1) break;

  console.log(`Найдено тут: ${foundPos}`);
  pos = foundPos + 1; // продолжаем со следующей позиции
}

// !slice ()

const yes = "yes";
const no = yes.slice(0, 2);
console.log(no);
console.log(yes);
const yes1 = "yes";
const no2 = yes1.substring(2, 0);
console.log(no2);

// !-----------------------------------Условные конструкции

let prsn = {
  age: 10,
};

if (!prsn.name) {
  console.log("имя не указана!");
}

// !if else if

const age = 24;
if (age > 18) {
  console.log("is adult");
} else if (age >= 12) {
  console.log("is teenger");
} else {
  console.log("is child");
}

// !if esle in func

const ifelsFnc = (a, b) => {
  if (typeof a !== "number" || typeof b !== "number") {
    return console.log("one is arguments not number");
  } else if (a <= 0 || b <= 0) {
    return console.log("numbers is not positive");
  } else {
    return console.log(a + b);
  }
};

ifelsFnc("12", "12");

// !switch case

const switchCaseFn = (f) => {
  switch (f) {
    case 12:
      return console.log(typeof f);
      break;
    case "":
      return console.log(typeof f);
      break;
    default:
      return console.log("хуйня");
  }
};

switchCaseFn("");

// ! группировака в case

let someNum = 5;

switch (someNum) {
  case 1:
  case 2:
    console.log("меньше");
    break;
  case 5:
    console.log("равно");
}

// !циклы-----------------------------------------------------------------------------------------------------------------
// ! while 
let a =0
while(a<15){
console.log(a++);

}


// !while do 

do{
  alert(a);
  a++

}while(a<9)

// !Методы массива splice

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


// !this

let obj = {
	car:'Tesla model s',
	year:2022,
	color:'black',
	hoursePower:'460hp',
	showColor(){
		console.log(this.color)
	}
}
let obj2 = {
	car:'Tesla model 3',
	year:2022,
	color:'Yellow',
	hoursePower:'460hp',
	characteristic:{
		tyre:'21inch',
		batary:'580 miles',
		showTyres(){
			console.log(this.tyre)
		}
	},
	showColor(){
		console.log(this.color)
	}
}

obj2.characteristic.showTyres()


// !Функции конструкторы
function Hero(name,skill,hp,weapon,enargy){
	this.name = name;
	this.skill = skill;
	this.weapon = weapon || 'knife';
	this.hp = hp;
	this.enargy = enargy
		return {name : 'drago'}
	}



let drago = new Hero('Drago','Fireball',900,"head",350)
console.log(drago)
// drago.showSkill()

let persival = new Hero('Persival','BlueFire Ball',900,'Hand',400)

//!Напишите функцию-конструктор Accumulator(startingValue).

//!Объект, который она создаёт, должен уметь следующее:

// !   Хранить «текущее значение» в свойстве value. Начальное значение устанавливается в аргументе конструктора startingValue.
// !   Метод read() использует prompt для получения числа и прибавляет его к свойству value.

// !аким образом, свойство value является текущей суммой всего, что ввёл пользователь при вызовах метода read(), с учётом начального значения startingValue.


function Accumulator (startingValue){
	this.value =startingValue;
	
	this.read = function(){
		
	 this.value += +prompt('Сколько нужно добавить a','0');
		
	}
	

}
let accumulator = new Accumulator(13); // начальное значение 2

accumulator.read(); // прибавит ввод prompt к текущему значению
accumulator.read(); // прибавит ввод prompt к текущему значению

alert(accumulator.value);

