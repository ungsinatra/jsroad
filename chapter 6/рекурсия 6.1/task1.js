// Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.
// recusion
function sumTo(n) {
  if (n == 1) {
    return n;
  } else {
    return n + sumTo(n - 1);
  }
}

console.log(sumTo(100));

// через цикл for
function sumTo(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
}
console.log(sumTo(100));
