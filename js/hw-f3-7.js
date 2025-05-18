let task1 = [5, 8, 3];
console.log("⏩ Исходный массив:", task1);
task1[1] = 10;
console.log("⏩ Обновлённый массив:", task1);
console.log("--------------------------");
let fruits = ["Яблоко", "Груша", "Банан"];
console.log("1️⃣ Исходный массив:", fruits);
fruits.push("Апельсин");
console.log("2️⃣ Обновлённый массив:", fruits);
console.log("--------------------------");
let task3 = [10, 20, 30];
console.log("⏩ Исходный массив:", task3);
let sum3 = 0;
for (let i = 0; i < task3.length; i++) {
  sum3 += task3[i];
}
console.log("⏩ Сумма чисел:", sum3);
console.log("--------------------------");
let task4 = [1, 2, 3, 4, 5];
console.log("⏩ Исходный массив:", task4);
for (let i = 0; i < task4.length; i++) {
  console.log(`⏩ ${task4[i]}`);
}
console.log("--------------------------");
let languages = ["JavaScript", "CSS", "HTML", "React", "Node.js"]; // 📚
console.log("Исходный массив:", languages);

console.log("Строки длиннее 5 символов:");
for (let lang of languages) {
  if (lang.length > 5) {
    console.log(`✅ ${lang}`);
  }
}
console.log("--------------------------");
let task6 = [15, 2, 45, 8, 10, 5, 20, 3, 30, 25];
console.log(`Исходный массив:`, task6);
let max = task6[0];
for (let i = 1; i < task6.length; i++) {
  if (task6[i] > max) {
    max = task6[i];
  }
}
console.log("Максимальное число:", max);
console.log("--------------------------");
let task7 = [7, 4, 9, 12, 3, 6, 8, 11, 2, 10];
console.log("Исходный массив:", task7);

console.log("Чётные числа:");
task7.forEach((num) => {
  if (num % 2 === 0) console.log(`✨ ${num}`);
});
