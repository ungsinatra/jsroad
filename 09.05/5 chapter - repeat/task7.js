// Compact. Напишите функцию, которая очищает массив от нежелательных значений, таких как false, undefined, пустые строки, ноль, null.

const compact = (array) => {
	let newArr=array.filter((el) => {
    if (Boolean(el)) {
      return el;
    }
  });
  return newArr
};

const data = [0, 1, false, 2, undefined, "", 3, null];
console.log(compact(data)); // [1, 2, 3]
