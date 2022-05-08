// !---------------------------
// !метод str 
// !indexOF

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