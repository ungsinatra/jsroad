//! Дана коллекция Set. Преобразуйте ее в массив двумя описанными способами. 


let set  = new Set([1,2,3,4]);

let newArr = [...set];
console.log(newArr);
let newArr2 = Array.from(set);
console.log(newArr2)

let arr = [1,2,3,4]