// Задача. Выведите на экран текущие день, месяц и год в формате 'год-месяц-день'. 

function getFullDate(){
let date = new Date();
return console.log(`${date.getFullYear()}/${date.getMonth()}/${date.getDate()}`)

}
console.log(getFullDate())