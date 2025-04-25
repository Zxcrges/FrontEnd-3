const selectedDrink = "Чай";
// const selectedDrink = "Кава";
// const selectedDrink = "Сік";
// const selectedDrink = "Вода";

switch (selectedDrink) {
  case "Кава":
    console.log("☕ Ваш латте готовий! Насолоджуйтесь!");
    break;
  case "Чай":
    console.log("🍵 Зеленый чай з жасміном - відмінний вибір!");
    break;
  case "Сік":
    console.log("🍹 Апельсиновий фреш - джерело вітамінів!");
    break;
  default:
    console.log("🚫 Упс! Щось пішло не так...");
}
console.log("================================================");
const day = "Субота";
// const day = "ПонеДІЛок";

if (typeof day === "string") {
  switch (day.toLowerCase()) {
    case "понеділок":
    case "вівторок":
    case "середа":
    case "четвер":
    case "пʼятниця":
      console.log("Сьогодні робочий день 🏢");
      break;
    case "субота":
    case "неділя":
      console.log("Сьогодні вихідний! 🌴");
      break;
    default:
      console.log("Невірно вказано день тижня");
  }
} else {
  console.log("Це не рядок! Де мій рядок!? ");
}
console.log("================================================");
const month = 2;
// const month = 4;
// const month = 7;
// const month = 11;

if (month >= 1 && month <= 12) {
  if (month === 12 || month <= 2) {
    console.log("За вікном зима ❄️");
  } else if (month >= 3 && month <= 5) {
    console.log("Настала весна 🌸");
  } else if (month >= 6 && month <= 8) {
    console.log("Літня спека! ☀️");
  } else {
    console.log("Золота осінь 🍂 (Мій день народження :3 )");
  }
} else {
  console.log("Невірний номер місяця");
}
console.log("================================================");
const color = "жовтий";
// const color = "рожевий";

switch (color.toLowerCase()) {
  case "червоний":
    console.log("🔴 СТОП! Не рухайтесь");
    break;
  case "зелений":
    console.log("🟢 Ідіть! Шлях вільний");
    break;
  case "жовтий":
    console.log("🟡 Приготуйтеся до старту");
    break;
  default:
    console.log("Невідомий колір. Де мій колір!?");
}

console.log("================================================");
const num1 = 10;
const num2 = 10;
const operator = "/"; // Можна змінити на +, -, *, /

if (typeof num1 !== "number" || typeof num2 !== "number") {
  console.log("Помилка: невірний тип даних");
} else {
  switch (operator) {
    case "+":
      console.log(`Результат: ${num1 + num2}`);
      break;
    case "-":
      console.log(`Результат: ${num1 - num2}`);
      break;
    case "*":
      console.log(`Результат: ${num1 * num2}`);
      break;
    case "/":
      num2 === 0
        ? console.log("Помилка: ділення на нуль!")
        : console.log(`Результат: ${num1 / num2}`);
      break;
    default:
      console.log("Невідома операція");
  }
}
