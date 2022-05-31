let json = '[1,2,3,4,5]';

// Преобразуйте эту строку в настоящий массив JavaScript и найдите сумму чисел этого массива. 

let arr = JSON.parse(json);

let sumElement = arr.reduce((prev,el)=> prev+el)

console.log(sumElement)