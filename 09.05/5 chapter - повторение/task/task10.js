// Unique. Напишите функцию, которая убирает повторяющиеся значения.
const unique = (array) => {
  let set = new Set(array);
  set = Array.from(set);
  return set;
};

const data = [1, 2, 1, 2, 3];
console.log(unique(data)); // [1, 2, 3]
