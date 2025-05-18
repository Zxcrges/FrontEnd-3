console.log("Сделано через while:");
let i = 1;
while (i <= 10) {
  console.log(`→ ${i} из 10`);
  i++;
}
console.log("Сделано через for, чисто по приколу:");
for (let i = 1; i <= 10; i++) {
  console.log(`→ ${i} из 10`);
}
console.log("--------------------------");
for (let i = 2; i <= 20; i++) {
  if (i % 2 !== 0) {
    console.log("⛔ Пропускаем: " + i);
    continue;
  }
  console.log("✅ Чётное: " + i);
}
console.log("либо можно сделать намного меньше кода:");
for (let i = 2; i <= 20; i += 2) {
  console.log("✅ " + i);
}
console.log("--------------------------");
console.log("✨ Таблица умножения на 7 ✨");
for (let i = 1; i <= 10; i++) {
  console.log(`✖️ 7 × ${i} = ${7 * i}`);
}
console.log("--------------------------");
const n = 5;
let a = 1;
console.log("💮 Начинаем вывод чисел до " + n + ":");
while (true) {
  if (a >= n) {
    console.log("⛔ Достигли предела: " + a + " (выход)");
    break;
  }
  console.log("✅ " + a);
  a++;
}
console.log("--------------------------");
let b = 1;
while (b <= 20) {
  if (b % 3 === 0) {
    console.log(`⏩ Пропускаем ${b} (кратно 3)`);
    b++;
    continue;
  }
  console.log(`✅ ${b}`);
  b++;
}
