// !Факториал натурального числа – это число, умноженное на "себя минус один", затем на "себя минус два", и так далее до 1. Факториал n обозначается как n!

function factorial(number) {
  if (number == 1) {
    return 1;
  } else {
    return number * factorial(number - 1);
  }
}

console.log(factorial(5));
