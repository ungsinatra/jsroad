// const str  = 'привет';
// const num = 123;

// *!3 задание
let a6, a7, a8, a9, a10;
a6 = 5 % 3;
a7 = 3 % 5;
a8 = 5 + "3";
a9 = 3 - "12";
a10 = 75 + "кг";
console.log(a6, a7, a8, a9, a10);
let typ = typeof a9;
console.log(typ);

// *!задание 4
// **Напишите скрипт, который находит площадь прямоугольника высота 23см. (в числовую переменную height), шириной 10см (в числовую переменную width), значение площади должно хранится в числовой переменной s
function STriangle(width, height) {
  let S;
  let num = typeof width;
  let str = typeof height;
  if (num != "number" || str != "number") {
    console.log("Ведите число");
  } else {
    S = (width * height) / 2;
    console.log(S);
  }
  return S;
}

STriangle(true, 123);

// *!задание 5
// **Напиши скрипт, который находит объем цилиндра высотой 10м (переменная heightC) и диаметром основания 4м (dC), результат поместите в переменную v.
const p = Math.PI;
let v;
function vСylinder(heightC, dC) {
  v = p * ((dC / 2) * heightC);

  return v;
}
console.log(vСylinder(10, 4));

//*! задание 6
// **У прямоугольного треугольника две стороны n (со значением 3) и m (со значением 4). Найдите гипотенузу k по теореме Пифагора (нужно использовать функцию Math.pow(число, степень) или оператор возведения в степень ** ).

let n, m, k;
function sStTriangle(nSide, mSide) {
  let nSideStr = typeof nSide;
  let mSideStr = typeof mSide;
  if (nSideStr != "number" || mSideStr != "number") {
    console.log("ведите число!");
  } else {
    k = nSide ** 2 + mSide ** 2;
  }
  return k;
}
console.log(sStTriangle(3, 4));

// ! задание 7
// ** Последовательность чисел Фибоначчи определяется формулой Fn = Fn-1 + Fn-2. То есть, следующее число получается как сумма двух предыдущих.
function fib(n) {
  let a = 1;
  let b = 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}
console.log(fib(12));

// ! задание 8
// *(*) Даны размер ипотечного кредита (S — 2 млн.руб), процентная ставка (p  — 10%), кол-во лет (years — 5). Найти переплату по кредиту, значение переплаты должно содержаться в переменной perepl.

// *function findyears (years){
// *  let s,p,res;
// *  p =10 ;
// *  s = 2000000;
// *  sumOfCridit = s/100*p;
// *  let prepayment = years*sumOfCridit;
// *  return prepayment;
// *}
// *console.log(findyears(5)+ ' рублей');

// !задание 8 ver 2
//*function findyears (years,s,p){
//*  let res;
//*  sumOfCridit = s/100*p;
//*  let prepayment = years*sumOfCridit;
//*  return prepayment;
//*}

//*console.log(findyears());
//*console.log(findyears(5,2000000,10)+ ' рублей');

function asda(b) {
  let a = 1;
  let c;
  c = a + b;
  a = c;
}

// !Вспомнить все

const myPlane = {
  findjob: "js front-end developer",
  endStudty: "in 2023",
  doFn() {
    console.log("move to europe!!");
  },
};
myPlane.doFn();

const myPlaneBackUp = {
  ...myPlane,
  font: "leiko",
};

const myPlane2 = JSON.parse(JSON.stringify(myPlane));
console.log(myPlane2);

// ! Напишите однострочное решение, которое вычисляет сумму квадратных корней для всех чётных чисел целочисленного массива.
const GArrray = [1, 4, 6, 8, 9, 2, 6];
const gAray2 = GArrray.map((a) => {
  a % 2 == 0;
  return a ** 2;

  return a;
});

console.log(gAray2);

// !Напишите функцию ucFirst(strlll), возвращающую строку str с заглавным первым символом. Например:

//?function ucFirst(strlll){
//?let lg = strlll.length
//?let res = strlll[0].toUpperCase();
//?return `${res}${strlll.slice(1,lg)} `

//?}
//?console.log(ucFirst("Алексей"))

function ucFirst(strlll) {
  let lg = strlll.length;
  let res = strlll.charAt(0).toUpperCase() + strlll.slice(1);
  return res;
}
console.log(ucFirst("Алексей"));

// !Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.
function checkSpam(sdsd) {
  let viagra = sdsd.toLowerCase();
  return viagra.includes("viagra") || viagra.includes("xxx");
}
console.log(checkSpam("buy ViAgRA now"));
console.log(checkSpam("free xxxxx"));
console.log(checkSpam("innocent rabbit"));

// !Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength.
// !Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка.

function truncate(stri, maxlength) {
  return stri.length > maxlength ? (str = `${stri.slice(0, 19)}…`) : str;
}

console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));

// !Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.
// !Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.
function extractCurrencyValue(dollar) {
  return dollar[0] === "$" ? (dollar = dollar.slice(1)) : +dollar;
}
console.log(extractCurrencyValue("12000"));

// !
function mItFiny(STR) {}

// !Напишите if..else, соответствующий следующему switch:

//? switch (browser) {
//?   case 'Edge':
//?     alert( "You've got the Edge!" );
//?     break;

//?   case 'Chrome':
//?   case 'Firefox':
//?   case 'Safari':
//?   case 'Opera':
//?     alert( 'Okay we support these browsers too' );
//?     break;

//?   default:
//?     alert( 'We hope that this page looks ok!' );
//? }

const brwFn = (brw) => {
  if (brw === "Edge") {
    return console.log("You've got the Edge!");
  } else if (brw === "chrome" || "firefox" || "safary" || "opera") {
    return console.log("Okay we support these browsers too");
  } else {
    return console.log("We hope that this page looks ok!");
  }
};

// !Используя конструкцию if..else, напишите код, который будет спрашивать: „Какое «официальное» название JavaScript?“
// !Если пользователь вводит «ECMAScript», то показать: «Верно!», в противном случае – отобразить: «Не знаете? ECMAScript!»
function nameOfJs(name) {
  return name === "ECMAScript"
    ? console.log("Верно")
    : console.log("Не знаете? ECMAScript!");
}
nameOfJs("E");
//!Используя конструкцию if..else, напишите код, который получает число через prompt, а затем выводит в alert:

//!    1, если значение больше нуля,
//!    -1, если значение меньше нуля,
//!    0, если значение равно нулю.

//!Предполагается, что пользователь вводит только числа.

function numberOfPromt(nm) {
  let nmbr = prompt("Ведите число");
  if (nmbr > 1) {
    return alert(1);
  } else if (nmbr < 0) {
    return alert(-1);
  } else {
    return alert(0);
  }
}

// !Перепишите конструкцию if с использованием условного оператора '?':
//!let result;

//!if (a + b < 4) {
//!  result = 'Мало';
//!} else {
//!  result = 'Много';
//!}

let result;
a + b < 4 ? (result = "мало") : (result = "много");

//!Перепишите if..else с использованием нескольких операторов '?'.
//!Для читаемости рекомендуется разбить код на несколько строк.
//!let message;

//!if (login == 'Сотрудник') {
//!  message = 'Привет';
//!} else if (login == 'Директор') {
//!  message = 'Здравствуйте';
//!} else if (login == '') {
//!  message = 'Нет логина';
//!} else {
//!  message = '';
//!}

let message =
  login == "Сотрудник"
    ? "Привет"
    : login == "Директор"
    ? "Здравствуйте"
    : login == ""
    ? "Нет Логина"
    : "";

// !Напишите условие if для проверки, что переменная age находится в диапазоне между 14 и 90 включительно.
// !«Включительно» означает, что значение переменной age может быть равно 14 или 90.

const ifeslFn = (nmbr1) => {
  return nmbr1 >= 14 && nmbr1 <= 90
    ? console.log("Число в диапазоне!")
    : console.log("Число не в диапазоне!");
};
ifeslFn(90);

// !Напишите условие if для проверки, что значение переменной age НЕ находится в диапазоне 14 и 90 включительно.
// !Напишите два варианта: первый с использованием оператора НЕ !, второй – без этого оператора.

// !version 1
const ifelseFn = (nmbr3) => {
  if (nmbr3 != 14 && nmbr3 < 14 && nmbr3 != 90 && nmbr3 < 90) {
    console.log("Верно!");
  } else {
    console.log("Не верно");
  }
  return nmbr3;
};
ifelseFn(100);

//!Напишите код, который будет спрашивать логин с помощью prompt.

//!Если посетитель вводит «Админ», то prompt запрашивает пароль, если ничего не введено или нажата клавиша Esc – показать «Отменено», в противном случае отобразить «Я вас не знаю».

//!Пароль проверять так:

//!    Если введён пароль «Я главный», то выводить «Здравствуйте!»,
//!    Иначе – «Неверный пароль»,
//!    При отмене – «Отменено».

//!Блок-схема:

function passBAd() {
  let pass;
  const whoIS = prompt("Кто там", "");
  if (whoIS === "Админ") {
    pass = prompt("Ведите пароль!");
    if (pass === "Я главный") {
      alert("Здравствуйте!");
    } else if (pass === null) {
      alert("Отменено");
    } else {
      alert("Неверный пароль");
    }
  } else if (whoIS === "" || whoIS === null) {
    alert("Отменено");
  } else {
    alert("я вас не знаю");
  }
  return pass;
}
passBAd();

//!  Переписать условия "if" на "switch"
//!важность: 4

//!Перепишите код с использованием одной конструкции switch:

//*const number = +prompt('Введите число между 0 и 3', '');*
//*if (number === 0) {
//*  alert('Вы ввели число 0');
//*}*
//*if (number === 1) {
//*  alert('Вы ввели число 1');
//*}*
//*if (number === 2 || number === 3) {
//*  alert('Вы ввели число 2, а может и 3');
//*}
// const numbr = +prompt('Ведите число между 0 и 3','')

const asdasd = (numbr) => {
  switch (numbr) {
    case 0:
      alert("Вы вели 0");
      break;
    case 1:
      alert("Вы вели 1");
      break;
    case 2:
    case 3:
      alert("Вы вели число 2 и 3");
      break;
  }
  return numbr;
};
asdasd(1);

// ! ??
let nig = 0;
let nig2 = 8;
alert(nig ?? nig2);

//!Следующая функция возвращает true, если параметр age больше 18.

//!В ином случае она задаёт вопрос confirm и возвращает его результат.

//!function checkAge(age) {
//!  if (age > 18) {
//!    return true;
//!  } else {
//!    return confirm('Родители разрешили?');
//!  }
//!}

//!Перепишите функцию, чтобы она делала то же самое, но без if, в одну строку.

//!Сделайте два варианта функции checkAge:

//!    Используя оператор ?
//!    Используя оператор ||

function checkAge(age) {
  return age > 18 ? true : confirm("Родители разрешили?");
}

function checkAge(age) {
  return age > 18 || confirm("Родители разрешили?");
}

// !Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.

function min(a, b) {
  return a > b ? b : a;
}

// !Напишите функцию pow(x,n), которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.
function pow(x, n) {
  return x ** n;
}
pow(70, 2);

// !l деструктуризация влоденных свойст обьектов
const newar = [
  [1, 2, 3, 5],
  1,
  {
    asd: 123,
    new: "new",
  },
];

let [firstAR, Second] = newar;

firstAR[1] = 3;
let jsonaray = JSON.parse(JSON.stringify(newar));
jsonaray[0][1] = 4;
console.log(jsonaray);
console.log(newar);

// !циклы

// ! Выведите столбец чисел от 1 до 100
let g = 1;
while (g < 100) {
  g++;
  console.log(g + "br");
}
// ! Выведите столбец чисел от 11 до 33
g = 11;
while (g < 33) {
  g++;
  console.log(g + "br");
}

// ! Выведите столбец четных чисел в промежутке от 0 до 100.
g = 0;
while (g < 100) {
  g++;
  if (g % 2) {
    console.log(g + "br");
  }
}
// ! С помощью цикла найдите сумму чисел от 1 до 100.
let nmbr = 1;
let res = 1;
while (nmbr < 100) {
  nmbr++;
  res = res + nmbr;
}
console.log(res);

n = 0;
x = 0;
while (n < 3) {
  n++;
  x += n;
}
console.log(x);

// ! Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все эти элементы на экран
const are = [1, 2, 3, 4, 5];
for (let i = 0; i < are.length; i++) {
  console.log(are[i]);
}

// !Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for найдите сумму элементов этого массива. Запишите ее в переменную result.
let are1 = [1, 2, 3, 4, 5];
let result1 = 0;
for (let i = 0; i < are1.length; i++) {
  result1 = result1 + are1[i] / are1.length;
}
console.log(result1);

classPoints, yourPoints;

let res5 = 0;
classPoints.push(yourPoints);
for (let i = 0; i < classPoints.length; i++) {
  res5 = res5 + classPoints[i] / classPoints.length;
}

// ! Дан объект obj. С помощью цикла for-in выведите на экран ключи и элементы этого объекта.

let obj = { green: "зеленый", red: "красный", blue: "голубой" };
for (el in obj) {
  console.log(el, obj[el]);
}
// !Дан объект obj с ключами Коля, Вася, Петя с элементами '200', '300', '400'. С помощью цикла for-in выведите на экран строки такого формата: 'Коля - зарплата 200 долларов.'.
let obj1 = {
  Коля: 200,
  Вася: 300,
  Петя: 400,
};
for (el in obj1) {
  console.log(`${el}-зарплата ${obj1[el]} долларов `);
}

// !Дан массив с элементами 2, 5, 9, 15, 0, 4. С помощью цикла for и оператора if выведите на экран столбец тех элементов массива, которые больше 3-х, но меньше 10.
let newArray = [2, 5, 9, 15, 0, 4];
for (let i = 0; i < newArray.length; i++) {
  if (newArray[i] > 3) {
    console.log(newArray[i]);
  }
}

// ! Дан массив с числами. Числа могут быть положительными и отрицательными. Найдите сумму положительных элементов массива.

let _neaar = [-1 - 1, -1, 1, 2, 4, 5];
let b = 0;
let a = _neaar.filter((el) => el > 0);
for (let i = 0; i < a.length; i++) {
  b = b + a[i];
}
console.log(b);

//! Дан массив с элементами 1, 2, 5, 9, 4, 13, 4, 10. С помощью цикла for и оператора if проверьте есть ли в массиве элемент со значением, равным 4. Если есть - выведите на экран 'Есть!' и выйдите из цикла. Если нет - ничего делать не надо.

let __newArray = [1, 2, 5, 9, 4, 4, 13, 10];
for (let i = 0; i < __newArray.length; i++) {
  if (__newArray[i] == 4) {
    console.log("Есть!");
    break;
  }
}

// 	!Дан массив числами, например: [10, 20, 30, 50, 235, 3000]. Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.
let _array = [10, 20, 30, 50, 235, 3000];
let rs3 = _array.filter((el) => ["1", "2", "5"].includes(el.toString()[0]));
console.log(rs3);

// ?let arr = [10, 20, 30, 50, 235, 3000];
// ?console.log(arr.filter(num => ['1','2','5'].includes(num.toString()[0])))

//  !Дан массив с элементами 1, 2, 3, 4, 5, 6, 7, 8, 9. С помощью цикла for создайте строку '-1-2-3-4-5-6-7-8-9-'.

_array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let got1 = "";
let resa;
for (let i = 0; i < _array.length; i++) {
  got1 += `-${_array[i]}`;
  resa = `${got1}-`;
}

console.log(resa);

// !Составьте массив дней недели. С помощью цикла for выведите все дни недели, а выходные дни выведите жирным.
let daysOfWeek = [
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
  "Воскресенье",
];
for (let i = 0; i < daysOfWeek.length; i++) {
  if (daysOfWeek[i] === "Суббота" || daysOfWeek[i] === "Воскресенье") {
    let weeknd = daysOfWeek[i].bold();
    console.log(weeknd);
  } else {
    console.log(daysOfWeek[i]);
  }
}
//! Составьте массив дней недели. С помощью цикла for выведите все дни недели, а текущий день выведите курсивом. Текущий день должен храниться в переменной day.
let daysOfWk = [
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
  "Воскресенье",
];
let day = "Суббота";
for (let i = 0; i < daysOfWk.length; i++) {
  if (daysOfWk[i] === day) {
    console.log(daysOfWk[i].italics());
  } else {
    console.log(daysOfWk[i]);
  }
}

//! Дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет меньше 50. Какое число получится? Посчитайте количество итераций, необходимых для этого (итерация - это проход цикла), и запишите его в переменную num.
let l = 1000;
let num = 0;
let rs;
for (let i = 0; i < l; i++) {
  num = i;
  l = l / 2;
  if (l < 50) {
    break;
  }
}
console.log(`Число:${l}\nИтерации:${num}`);

//!Напишите цикл, который предлагает prompt ввести число, большее 100. Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.
//!Цикл должен спрашивать число пока либо посетитель не введёт число, большее 100, либо не нажмёт кнопку Отмена (ESC).
//!Предполагается, что посетитель вводит только числа. Предусматривать обработку нечисловых строк в этой задаче необязательно.

let nub = prompt("Ведите число больше 100!", "");
while (nub < 100 || nub == "null" || nub == "undefined") {
  nub = prompt("Ведите число больше 100!", "");
  nub++;
}
alert(nub);

// **do {
// **  num = prompt("Введите число больше 100?", 0);
// **} while (num <= 100 && num);

// !Натуральное число, большее 1, называется простым, если оно ни на что не делится, кроме себя и 1.
// !Другими словами, n > 1 – простое, если при его делении на любое число кроме 1 и n есть остаток.
// !Например, 5 это простое число, оно не может быть разделено без остатка на 2, 3 и 4.
// !Напишите код, который выводит все простые числа из интервала от 2 до n.
// !Для n = 10 результат должен быть 2,3,5,7.
// !P.S. Код также должен легко модифицироваться для любых других интервалов.

let n = 10;

nextPrime: for (let i = 2; i <= n; i++) {
  // Для всех i...

  for (let j = 2; j < i; j++) {
    // проверить, делится ли число..
    if (i % j == 0) continue nextPrime; // не подходит, берём следующее
  }

  console.log(i); // простое число
}

// !Написать с помощью цикла while «переворот» числа. Другими словами, нужно создать новое число, у которого цифры шли бы в обратном порядке (например: 472 -> 274).

let soNumbr = "472";
let su2Numbr = 0;
while (su2Numbr < soNumbr) {
  su2Numbr = soNumbr.split("");
  su2Numbr = su2Numbr.reverse();
  su2Numbr = su2Numbr.join("");
  break;
}
console.log(su2Numbr);



// !Таблица уманжение
let title = document.querySelector(".title");

// *for (let i = 1; i < 10; i++) {
// *  title.innerHTML += "<hr>";

// *  for (let j = 1; j < 10; j++) {
// *    title.innerHTML += `${i}*${j}=${i * j} <br>`;
// *  }
// *}

// ! Вывещти на экран 654 653 552 до нуля
// let title = document.querySelector(".title");
for (let i = 654; i >= 0; i--) {
  title.innerHTML += `${i}<br>`;
}

// ! Вывещти все годы с 1983 до 2017
// !for (let i = 1983;i<=2017;i++){
// !	title.innerHTML +=i+'<br>';
// !}

// !Вывести числа -4 -2 0 2 4 и до 100
let title = document.querySelector(".title");

// for(let i = -4;i<=100;i=i+2){
// 	title.innerHTML += i +'  '
// }

// !таблица умнажение 7 !
// for(let i = 1;i<10;i++){
// 	title.innerHTML +=`7*${i}=${7*i} <br>`
// }

//! Вывести с помошью цикла спецсимволы от 1000 до 2000 Пример &#1200
// for(let i =1;i<=10000;i++){
// 	title.innerHTML +=`&#${i}   `

// }

// !Найти сумму чисел от 0 до 100 включительно
// let current =0;
// for (let i = 0;i<=100;i++){
// 	current +=i;
// 	title.innerHTML = current
//}
//let n =1
// !Найти произведение чисел от 0 до 50
// for (let i = 1;i<50;i++){
// 	n*=i;
// 	console.log(n)
// 	title.innerHTML =n
// }

// !Есть массив строк в котором находиться значение в px em и тд.нужно перевести все строки в числа,удалить отрецателные значение и отсортеовать массив в порядке возрастание

let array = ["10px", "12px", "-12px", "-2em", "2%", "-14px", "14"];
let arr2 = [];

function arrayOf(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = parseFloat(arr[i]);
    if (arr[i] >= 0) {
      arr2.push(arr[i]);
    }
  }

  arr2.sort((a, b) => a - b);
  return arr2;
}
console.log(arrayOf(array));

// !Есть массив [-1,4] и [6,9] нужно заполнить пропущенные значение на пример вот так [1,0,1,2,3,4] [6,7,8,9]
let ar = [1, 1, 6, -9, 12, 15, 22];
let a1 = [];
if (ar[0] >= ar[1]) {
  ar.sort((a, b) => a - b);
  console.log(ar);
}

for (let i = ar[0]; i <= ar[ar.length - 1]; i++) {
  a1.push(i);
}

console.log(a1);


// !Создайте скрипт, который запрашивает ввод двух чисел (используйте prompt) и после показывает их сумму.

  let a=prompt('Ведите превое число','');
  let b=prompt('Ведите превое число','');
  let result2;

  result2=(+(a+b))

  /**
 * Напишите функцию sumInput(), которая:

    Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
    Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
    Подсчитывает и возвращает сумму элементов массива.

P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».
 * 
 */

function sumInput() {
  let arr = [];
  let qution;
  while (true) {
    qution = prompt("Ведите число", 0);
    if (qution === "" || qution === null || !isFinite(qution)) break;
    arr.push(+qution);
  }

  let Qt = 0;
  for (let i = 0; i < arr.length; i++) {
    Qt += arr[i];
  }

  return Qt;
}
alert(sumInput());



// !Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
// !То есть дефисы удаляются, а все слова после них получают заглавную букву.
const camelize = (str) => {
  str = str.split("-");
  console.log(str);
  let newSTr = str.map((word, i) => {
    return i == 0 ? word : 
	word[0].toUpperCase() + word.slice(1);
  });

  return newSTr.join("");
};
console.log(camelize("background-color"));

//! Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет в нём элементы между a и b и отдаёт массив этих элементов.
//! Функция должна возвращать новый массив и не изменять исходный.
const filterRange = (arr, a, b) => {
  arr = arr.filter((item) => {
    if (item >= a && item <= b) {
      return item;
    }
  });
  
  return arr
};

console.log(filterRange([5, 3, 8, 1], 1, 4));
//! Сортировать в порядке по убыванию
const getSortByArr = (arr)=>{
	arr=arr.sort((a,b)=>{
		return b-a;

	})
	// arr.reverse()
	return arr
}
console.log(getSortByArr([5, 2, 1, -10, 8]))
// !У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.
// !Создайте функцию copySorted(arr), которая будет возвращать такую копию.
let arr = ["HTML", "JavaScript", "CSS"];
let newArr=[];
arr.map(el=>{
	return newArr.push(el);
})
newArr = newArr.sort()
console.log(newArr)
//! У вас есть массив объектов user, и в каждом из них есть user.name. Напишите код, который преобразует их в массив имён.
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };
let arr = [];
let users = [];
arr.push(vasya,petya,masha);
arr.map(el =>{
	return 	users.push(el.name)
})
console.log(users)

//! У вас есть массив объектов user, и у каждого из объектов есть name, surname и id.
//! Напишите код, который создаст ещё один массив объектов с параметрами id и fullName, где fullName – состоит из name и surname.

let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [vasya, petya, masha];

let usersMapped = users.map((user)=>({
	fullName:`${user.name} ${user.surname}`,
	id:user.id	
}))



console.log(usersMapped)

//!Напишите функцию getAverageAge(users), которая принимает массив объектов со свойством age и возвращает средний возраст.
//!Формула вычисления среднего арифметического значения: (age1 + age2 + ... + ageN) / N.
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];
let newArr =[]
newArr =arr.reduce((acc,item)=>{
	return	acc+=item.age/arr.length

},0)

console.log(newArr)

//! Описание задачи: Напишите функцию, которая заполняет новый массив предоставленным значением.
//   ! Ожидаемый результат: (3, 'a') => ['a', 'a', 'a']

const getNewArr = (str,value) =>{
  let arr = [];
  arr.length=value
  arr.fill('x')
  
  console.log(arr)
  }
  getNewArr('b',5);



  /**
  * Описание задачи: Напишите функцию, которая очищает массив от нежелательных значений, таких как false, undefined, пустые строки, ноль, null.
  * Ожидаемый результат: [0, 1, false, 2, undefined, '', 3, null] => [1, 2, 3]
  * Сложность задачи: 1 of 5
  * @param {Array} array - Массив любых элементов
  * @returns {Array}
*/
const compact = (array) => {
	let newArr=[]
	array.filter((item)=>{
		if(item!==null&&item!==undefined&&item!==false&&item !==''&&item>0){
			return newArr.push(item);
		}
		return []

	})
	console.log(newArr)
	return newArr	
}

compact([0, false, false, false, undefined, '', null, null])
// !Создайте объект calculator (калькулятор) с тремя методами:

// !    this() (читать) запрашивает два значения и сохраняет их как свойства объекта.
// !    sum() (суммировать) возвращает сумму сохранённых значений.
// !    mul() (умножить) перемножает сохранённые значения и возвращает результат.

let calculator = {
	
	read(){
	   this.first = +prompt('a?',0);
	   this.second = +prompt('b?',0);
	   
	},
	sum(){
	   return this.first+this.second;
	},
	mul(){
		return 	 this.first*this.second;
		
		
	}

 };


calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );

// !map
// !Set
function unique(arr) {
	let newArr = new Set(arr);
	let newaaaa =Array.from(newArr)
	return newaaaa
  }
  
  let values = ["Hare", "Krishna", "Hare", "Krishna",
	"Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];
  
console.log(( unique(values) )); 