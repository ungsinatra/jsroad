//! Напишите функцию, возвращает новый массив без предоставленных значений. Используйте примитивные типы.
const without = (array, ...args) => {
  let [...newArr]=array;
  for (let i = 0; i < args.length; i++) {
    newArr = newArr.filter((el) => {
      return el !== args[i];
    });
  }
  return newArr;
};

const data = [1, 2, 3, 1, 2];
console.log(without(data, 1, 2)); // [3]
