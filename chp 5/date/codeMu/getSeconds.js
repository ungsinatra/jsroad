// Выведите на экран количество секунд с начала дня до настоящего момента времени


let nowDate = new Date();

let postDate = new Date('2022-04-29')
console.log(nowDate.getTime())
let res = Math.round((postDate.getTime()-nowDate.getDate())/1000)//?
console.log(res)