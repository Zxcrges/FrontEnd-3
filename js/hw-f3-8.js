const friends = ["Mango", "Poly", "Kiwi", "Ajax"];
let string = "";

for (let i = 0; i < friends.length; i++) {
  string += friends[i];
  if (i !== friends.length - 1) {
    string += ",";
  }
}
console.log("Результат (for):", string);

const joinedString = friends.join(", ");
console.log("Результат (join):", joinedString);

console.log("--------------------------");

const cards = [
  "Карточка-1",
  "Карточка-2",
  "Карточка-3",
  "Карточка-4",
  "Карточка-5",
];

const cardToRemove = "Карточка-3";
const index = cards.indexOf(cardToRemove);

if (index !== -1) {
  cards.splice(index, 1);
  console.log("✅ Удалено:", cardToRemove);
} else {
  console.log("❌ Карточка не найдена");
}
console.log("Остались карточки:", cards);

const indexToRemove = 2;
const removedCard = cards.splice(indexToRemove, 1);

console.log("✅ Удалено:", removedCard[0]);
console.log("Остались карточки:", cards);

const cardToInsert = "Карточка-6";
const insertIndex = 3;

cards.splice(insertIndex, 0, cardToInsert);
console.log("✅ Добавлено:", cardToInsert);
console.log("Обновлённый список:", cards);

const cardToUpdate = "Карточка-4";
const updatedCard = "Карточка-4 (оновлена)";
const i = cards.indexOf(cardToUpdate);

if (i !== -1) {
  cards.splice(i, 1, updatedCard);
  console.log("✅ Обновлено:", cardToUpdate, "→", updatedCard);
} else {
  console.log("❌ Карточка не найдена");
}

console.log("Обновлённый список:", cards);
