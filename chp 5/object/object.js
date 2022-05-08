//!Напишите код, выполнив задание из каждого пункта отдельной строкой:

//!    Создайте пустой объект user.
//!    Добавьте свойство name со значением John.
//!    Добавьте свойство surname со значением Smith.
//!    Измените значение свойства name на Pete.
//!    Удалите свойство name из объекта.

const user = {};
user.name = "jonh";
user.surname = "Smith";
user.name = "Pete";
delete user.name;
console.log(user.name);

//! Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.
let schedule = { "8:30": "get up" };
const isEmpty = (obj) => {
  if (obj.lenght == 0) {
    return true;
  }
  return false;
};
console.log(isEmpty(schedule));
// !У нас есть объект, в котором хранятся зарплаты нашей команды:

let salaries = {
	John: 100,
	Ann: 160,
	Pete: 130
  }

let salaries1 = 0;
for(key in salaries){
	salaries1+=salaries[key]

}
console.log(salaries1)

// !Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2
let menu = {
	width: 200,
	height: 300,
	title: "My menu"
  };
  
const multiplyNumeric = (obj) =>{

for(let key in obj){
	if(Number(obj[key])){
		obj[key]=obj[key]*2
	}
	
}
console.log(obj)
}
multiplyNumeric(menu)
