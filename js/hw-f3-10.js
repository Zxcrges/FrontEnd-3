const numbers = [1, 5, 8, 12, 3, 15, 7, 20];
const words = ["кот", "собака", "мышь", "попугай", "хомяк"];

function countItems(array, condition) {
  let count = 0;
  for (const element of array) {
    if (condition(element)) {
      count++;
    }
  }
  return count;
}

const isEven = (num) => num % 2 === 0;
const isLarge = (num) => num > 10;
const isShort = (word) => word.length <= 3;

console.log("Чётных чисел:", countItems(numbers, isEven));
console.log("Чисел больше 10:", countItems(numbers, isLarge));
console.log("Коротких слов:", countItems(words, isShort));
console.log("==================================================");
const calculate = (a, b, operation) => operation(a, b);

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => {
  if (b === 0) {
    throw new Error("Ошибка: деление на ноль невозможно!");
    // нашла метод throw new Error, он генерирует ошибки по надобности
  }
  return a / b;
};

try {
  console.log(calculate(10, 5, add)); // 15
  console.log(calculate(10, 5, subtract)); // 5
  console.log(calculate(10, 5, multiply)); // 50
  console.log(calculate(10, 5, divide)); // 2
  console.log(calculate(10, 0, divide)); // Ошибка
} catch (error) {
  console.error(error.message);
}
console.log("==================================================");
function repeatMessage(times, messageCreator) {
  for (let i = 0; i < times; i++) {
    console.log(messageCreator(i));
  }
}

const simpleMessage = (index) => `Сообщение #${index + 1}`;

const oddEvenMessage = (index) =>
  `Итерация ${index}: ${index % 2 === 0 ? "четное" : "нечетное"} число`;

const countdownMessage = (index, total) =>
  `Осталось итераций: ${total - index - 1}`;

console.log("Простое сообщение:");
repeatMessage(3, simpleMessage);

console.log("Четные/нечетные числа:");
repeatMessage(5, oddEvenMessage);

console.log("Обратный счетчик:");
repeatMessage(4, (i) => countdownMessage(i, 4));
console.log("==================================================");
