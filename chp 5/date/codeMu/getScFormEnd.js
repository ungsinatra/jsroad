// Выведите на экран количество секунд, которое осталось до конца дня. 


let now = new Date();

let postDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(),23,59,59)
console.log(postDate)

let res = Math.round(((postDate.getTime()-now.getTime())/1000))
console.log(res)