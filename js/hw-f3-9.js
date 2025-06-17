function logItems(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(`${i + 1} - ${arr[i]}`);
  }
}
logItems(["Mango", "Poly", "Ajax"]);
logItems(["happy", "sad", "something"]);
console.log("==================================================");
function calcPrice(message, pricePerWord) {
  const words = message.split(" ");
  const wordCount = words.length;
  const totalPrice = wordCount * pricePerWord;
  return totalPrice;
}
const price = calcPrice("Ты очень хороший человек", 10);
console.log(price); // 40
console.log("==================================================");
function findLongestWord(string) {
  const words = string.split(" ");
  let longestWord = words[0];
  for (let i = 1; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }
  return longestWord;
}
console.log(findLongestWord("Я люблю программирование"));
console.log(findLongestWord("Я очень люблю кушать азиатскую еду"));
console.log("==================================================");
function formatString(string) {
  if (string.length <= 40) {
    return string;
  } else {
    return string.slice(0, 40) + "...";
  }
}
console.log(formatString("Я маленький"));
console.log(
  formatString("А я оказался слишком большой для этой функции, это грустно :(")
);
console.log("==================================================");
function checkForSpam(message) {
  const lowerCaseMessage = message.toLowerCase();
  return (
    lowerCaseMessage.includes("грустно") || lowerCaseMessage.includes("весело")
  );
}
console.log(checkForSpam("Мне сегодня очень грустно")); // true
console.log(checkForSpam("Я сегодня весело провела время")); // true
console.log(checkForSpam("А зачем я тут?")); // false
console.log("==================================================");
let input;
const numbers = [];
let total = 0;

while (true) {
  input = prompt("Введите число:");

  if (input === null || input.trim() === "") {
    break;
  }

  const number = Number(input);

  if (Number.isNaN(number)) {
    alert("Было введено не число, попробуйте еще раз");
    continue;
  }

  numbers.push(number);
}

if (numbers.length > 0) {
  for (const num of numbers) {
    total += num;
  }
  console.log(`Общая сумма чисел равна ${total}`);
} else {
  console.log("Не было введено ни одного числа.");
}
