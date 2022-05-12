//! From Pairs. Напишите функцию, которая возвращает объект, составленный из значений вложенных массивов. Первое элемент массива - ключ, второй - зачение.
const fromPairs = (array) => {

  let newObj = Object.fromEntries(array);
  return newObj
};

const data = [
  ["a", 1],
  ["b", 2],
];
console.log(fromPairs(data)); // { 'a': 1, 'b': 2 }
