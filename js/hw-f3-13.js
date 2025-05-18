/*
 * Типів транзацкій всього два.
 * Можна покласти або зняти гроші з рахунку.
 */
const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

/*
 * Кожна транзакція - це об'єкт з властивостями: id, type і amount
 */
const account = {
  // Поточний баланс рахунку
  balance: 0,

  // Історія транзакцій

  transactions: [],
  /*
   * Метод створює і повертає об'єкт транзакції.
   * Приймає суму і тип транзакції.
   */

  createTransaction(amount, type) {
    return {
      amount,
      type,
    };
  },
  /*
   * Метод відповідає за додавання суми до балансу.
   * Приймає суму танзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його в історію транзакцій
   */
  deposit(amount) {
    const newTransaction = this.createTransaction(amount, Transaction.DEPOSIT);
    this.balance += amount;
    this.transactions.push(newTransaction);
  },

  /*
   * Метод відповідає за зняття суми з балансу.
   * Приймає суму танзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його в історію транзакцій.
   *
   * Якщо amount більше, ніж поточний баланс, виводь повідомлення
   * про те, що зняття такої суми не можливо, недостатньо коштів.
   */
  withdraw(amount) {
    if (amount > this.balance) {
      console.log("Брат ты бомжик, тебе не хватает :(");
      return "Брат ты бомжик, тебе не хватает :(";
    } else {
      const newTransaction = this.createTransaction(
        amount,
        Transaction.WITHDRAW
      );
      this.balance -= amount;
      this.transactions.push(newTransaction);
    }
  },

  /*
   * Метод повертає поточний баланс
   */
  getBalance() {
    return this.balance;
  },
  /*
   * Метод шукає і повертає об'єкт транзакції по id
   */
  getTransactionDetails(id) {},

  /*

   * Метод повертає кількість коштів
   * певного типу транзакції з усієї історії транзакцій
   */
  getTransactionTotal(type) {},
};

console.log(account.getBalance());
account.deposit(1000);
console.log(account.getBalance());
account.withdraw(500);
console.log(account.getBalance());
account.withdraw(1500);
