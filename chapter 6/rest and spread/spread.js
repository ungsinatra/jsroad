// копирование с spread
let arr = ['asdasd',12,'asdasd'];
let newArr = [...arr]
console.log(newArr)


// Копирование нескольких массивов 
let arr2 = [1,2,3,4,5]
let newArr2 =[...arr,...arr2]
console.log(newArr2)


// работа spread с переб обьектами 
let str  = "sardon";
let newStr =[...str];
console.log(newStr)