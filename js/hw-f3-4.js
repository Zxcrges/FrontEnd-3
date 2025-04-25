// const value1 = "";
// const value2 = "";

const value1 = "";
const value2 = "df";

// const value1 = "df";
// const value2 = "df";

if (value1 !== "" && value2 !== "") {
  console.log("Обидва поля заповнені");
} else {
  console.log("Не всі поля заповнені");
}
console.log("================================================");
// const num1 = 5;
// const num2 = 5;

// const num1 = 2;
// const num2 = 5;

const num1 = 11;
const num2 = 5;

if (num1 + num2 > 10) {
  console.log("Сума більша за 10");
} else {
  console.log("Сума менша або дорівнює 10");
}
console.log("================================================");
const js = "JavaScript";
if (js.includes("JavaScript")) {
  console.log("Текст містить слово JavaScript");
} else {
  console.log("Текст не містить слово JavaScript");
}
console.log("================================================");
// const number1 = 11;
const number1 = 25;
if (number1 > 10 && number1 <= 20) {
  console.log("Число входить в діапазон від 10 до 20");
} else {
  console.log("Число не входить в діапазон від 10 до 20");
}
console.log("================================================");
const uName = "Vira";
// const uName = "";
const uEmail = "test@gmail.com";
// const uEmail = "";
const uPass = "qwerty123";
// const uPass = "";
if (uName.length < 3 && uEmail.includes("@.") && uPass.length < 6) {
  ("Перенаправлення на іншу сторінку");
} else {
  ("Помилка: неправильне заповнення");
}
