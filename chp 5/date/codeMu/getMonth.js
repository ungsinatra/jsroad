

// Задача. Выведите на экран текущий месяц словом, по-русски.


let arrMonth = ['ян','фев','мар','апр','май','ию','ав','се','ок','но','де']
let date = new Date();

console.log(arrMonth[date.getMonth()])
