//!------------------------------------number--------------------------
let n = 12.1213;
let newN = n.toPrecision(3); //12.1 выводит кол цифр как срока

let newNumber = 1.2326;
let newNEWNUber = newNumber.toFixed(3); //1.233 в аргументе занчение после запятой,вывод строки и окрг до бл хначение

let num = 5.56789;
let na = num.toFixed(3); //5.568

console.log(newNEWNUber);
let newNa = 11.5;
let newNA = Math.floor(newNa); //11 окрг в мень сторону
console.log(newNA);

let a = 12.2;
console.log(Math.ceil(a)); //13

let s = 12.5;
console.log(Math.round(s)); //13 окр до ближ

let x = 12.2;
console.log(Math.trunc(x)); //12

//! -----------------------------------------------------------------string

let name = "sardor";
let correctName = name[0].toUpperCase(); //toUppercase()
name = name.slice(1); //slice()
correctName += name;
console.log(correctName);

let otherStr =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

const findSubStr = (str) => {
  let res;
  res = str.indexOf("dolor", 20); //indexOf()
  return res;
};
console.log(findSubStr(otherStr));

function truncate(str, maxlength) {
  let res = "";
  if (str.length > maxlength) {
    return (res += str.slice(0, maxlength - 1) + "…");
  }
  return str;
}
console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));

let newLorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

function getSubStr(str) {
  let result = str.includes("ut"); //true так как подстрока "ut" естьв строке
  return result;
}

console.log(getSubStr(newLorem));

function splitAndMerge(string, separator) {
  let newArr = string.split(" ");
  console.log(newArr);
  let newStr = newArr.join(separator);
  return newStr;
}

console.log(splitAndMerge("Hello World!", "."));

// ---------------------------------------------Array -----------------------------------------

let arr = [1, 2, 3, 4, []];
console.log(String(arr)); //string вывод строки 1,2,3,4,

function camelize(str) {
  let res = [];
  let arr = str.split("-"); //split()
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    let someStr = String(arr[i]);
    let upperCase = someStr.slice(0, 1).toUpperCase(); //Slice() nad ToUppercase()
    someStr = upperCase + someStr.slice(1); //slice()
    res.push(someStr);
  }
  res = res.join(""); //join()
  return res;
}
console.log(camelize("-webkit-transition"));

// ------------------------------------------------------------------------------

function filterRange(arr, a, b) {
  let newArr = arr.filter((el) => {
    //filter()
    if (el >= a && el <= b) {
      return el;
    }
  });
  newArr = newArr.sort((a, b) => {//sort() сортировака по возр
    return a - b;
  });
  return newArr;
}
console.log(filterRange([5, 3, 8, 1], 1, 4));


// ------------------------------------------------------------------------------------

function copyStarted(arr){
	let newArr = arr.slice().sort();//copy and sort()
	console.log(arr)
	return newArr

}
console.log(copyStarted( ["HTML", "JavaScript", "CSS"]))


// ----------------------------------------------------------------------------------


let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];


let names = users.map(el=>{//map()
	return el.name
		
})
console.log(names)


//------------------------------------------------------------------------------------
let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [ vasya, petya, masha ];


let usersMapped = users.map(el=>({
	fullName:`${el.name} ${el.surname}`,
	id:`${el.id}`

}))

console.log(usersMapped)


// ---------------------------------------------------------------------------
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arr = [ vasya, petya, masha ];

function sortByAge(arr){
		arr.sort((a,b)=>{//sort()
		return 	(a.age>b.age)?1:-1

		})
		return arr
}
console.log(sortByAge(arr))