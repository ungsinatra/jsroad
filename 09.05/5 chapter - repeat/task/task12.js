// ?Напишите функцию, которая преобразует глубокий массив в одномерный. Пожалуйста, не используйте array.flat(), чтобы сделать задачу интереснее.
const flatten = (array) => {
 let newArr= array.reduce((acc, item) => {
    return acc.concat(Array.isArray(item) ? flatten(item) : item);
  }, []);
  return newArr
};

const data = [1, 2, [3, 4, [5]]];
console.log(flatten(data)); // [1, 2, 3, 4, 5]
