// Завдання 1
// Напиши скрипт, який, для об'єкта user, послідовно:
// - додає поле mood зі значенням 'happy'
// - замінює значення hobby на 'skydiving'
// - замінює значення premium на false
// - виводить вміст об'єкта user в форматі ключ:значення -використовуючи Object.keys() і for...of
const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true,
};
user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;
const keys = Object.keys(user);
for (const key of keys) {
  // console.log(${key}: ${user[key]})
}

// Завдання 2
// Напиши функцію countProps(obj), яка рахує кількість властивостей в об'єкті. Функція повертає число — кількість властивостей.
const countProps = function (obj) {
  const keys = Object.keys(obj);
  return keys.length;
};
// console.log(countProps({})); // 0
// console.log(countProps({ name: 'Mango', age: 2 })); // 2
// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3

// Завдання 3
// Напиши функцію findBestEmployee(employees), яка приймає об'єкт співробітників і повертає ім'я найпродуктивнішого (який виконав більше всіх задач). Співробітники і кількість виконаних завдань містяться як властивості об'єкта в форматі "ім'я":"кількість задач".
const findBestEmployee = function (employees) {
  const values = Object.values(employees);
  const maxTask = Math.max(...values);
  //   console.log(maxTask)
  const keys = Object.keys(employees);
  for (let key of keys) {
    if (employees[key] === maxTask) {
      return key;
    }
  }
};
// console.log(
//   findBestEmployee({
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99,
//   }),
// ); // lorence

// console.log(
//   findBestEmployee({
//     poly: 12,
//     mango: 17,
//     ajax: 4,
//   }),
// ); // mango

// Завдання 4
// Напиши функцію countTotalSalary(employees) приймаючу об'єкт зарплат. Функція рахує загальну суму зарплати працівників і повертає її. Кожне поле об'єкта, переданого в функцію, має вигляд "ім'я":"зарплата".
const countTotalSalary = function (employees) {
  const salarys = Object.values(employees);
  let total = 0;
  for (let value of salarys) {
    total += value;
  }
  return total;
};
// console.log(countTotalSalary({})); // 0
// console.log(
//   countTotalSalary({
//     mango: 100,
//     poly: 150,
//     alfred: 80,
//   }),
// ); // 330

// Завдання 5
// Напиши функцію getAllPropValues(arr, prop), яка отримує масив об'єктів і ім'я властивості. Повертає масив значень певної властивості prop з кожного об'єкта в масиві.
const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроїд", price: 400, quantity: 7 },
  { name: "Захоплення", price: 1200, quantity: 2 },
];

const getAllPropValues = function (arr, prop) {
  //  1 створити пустий масив
  let values = [];
  // 2 перебрати масив
  for (let item of arr) {
    if (item[prop]) {
      values.push(item[prop]);
    }
  }
  return values;
  //3 первіряємо чи є цей проп(if item[prop])
  //4 якщо є то додаємо в масив це значення
  // 5 повертаємо новостворений масив
};

// console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроїд', 'Захоплення']
// console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]
// console.log(getAllPropValues(products, 'category')); // []

// Завдання 6
// Напиши функцію calculateTotalPrice(allProdcuts, productName), яка отримує масив об'єктів та ім'я продукту (значення властивості name). Повертає загальну вартість продукту (ціна * кількість).
// Викличи функції для перевірки працездатності твоєї реалізації.
const calculateTotalPrice = function (allProdcuts, productName) {
  let value = 0;
  for (let item of allProdcuts) {
    if (productName === item.name) {
      value = item.price * item.quantity;
    }
  }
  return value;
};

console.log(calculateTotalPrice(products, "Радар")); // 5200
console.log(calculateTotalPrice(products, "Дроїд")); // 2800
