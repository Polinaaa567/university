"use strict";

let number = Number(prompt());

function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

function average(n) {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum / n;
}

if (number % 2 === 0) {
  document.write(`${number}! = ${factorial(number)}`);
} else {
  document.write(
    `Среднее арифметическое от 1 до ${number} = ${average(number)}`
  );
}
