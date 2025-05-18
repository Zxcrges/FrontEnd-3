const bankAccount = {
  ownerName: "Riche-rich",
  accountNumber: 65436,
  balance: 10000000,
  deposit(value) {
    const sure1 = confirm(
      `Are you sure you want to deposit on your bank account ${value}`
    );
    if (sure1 == true) {
      this.balance = this.balance + value;
    } else {
      return alert("ok :)");
    }
  },
  withdraw(value) {
    const sure2 = confirm(
      `Are you sure you want to withdraw from your bank account ${value}`
    );
    if (sure2 == true) {
      this.balance = this.balance - value;
    } else {
      return alert("ok :)");
    }
  },
};
// const action = prompt("What you want: deposit or withdraw?");
// if (action === "deposit") {
//   bankAccount.deposit(Number(prompt("How much?")));
//   alert(`Your balance now ${bankAccount.balance}`);
// } else if (action === "withdraw") {
//   const sum = Number(prompt("How much?"));
//   if (sum < bankAccount.balance) {
//     bankAccount.withdraw(sum);
//     alert(`Your balance now ${bankAccount.balance}`);
//   } else {
//     alert(`Sory but your bank account have only ${bankAccount.balance}`);
//   }
// } else {
//   alert("Wrong function");
// }
// console.log(bankAccount);

// const weather = {
//   temp: prompt("Введи температуру пажалуста :3"),
//   humidity: 0,
//   windSpeed: 0,
//   belowZero() {
//     if (Number(this.temp) < 0) {
//       return true;
//     } else {
//       return false;
//     }
//   },
// };
// const answer = weather.belowZero();
// if (answer) {
//   alert("Ниже нуля :(");
// } else {
//   alert("Ниже нуля :)");
// }
// console.log(answer);

const user = {
  name: "Vira",
  email: "notyour@gmail.com",
  password: "goaway",
  login(email, password) {
    if (this.email === email && this.password === password) {
      return true;
    }
    return "ПШЕЛ ОТ СЮДА МОШЕННИК!!";
  },
};
const result = user.login("бебебе бубубу", "бябябя");
const relust2 = user.login("notyour@gmail.com", "goaway");
console.log(result);
console.log(relust2);

const movie = {
  title: "Бябябя",
  director: "Верочка :3",
  year: "2003",
  rating: 11,
  checkRating() {
    if (this.rating > 8) {
      return "Ну красота, я прям в шоки";
    } else {
      return "Не ну фигня :(";
    }
  },
};
console.log(movie.checkRating());
