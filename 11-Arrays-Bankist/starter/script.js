'use strict';

// /////////////////////////////////////////////////
// /////////////////////////////////////////////////
// // BANKIST APP

// // Data
// const account1 = {
//   owner: 'Jonas Schmedtmann',
//   movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
//   interestRate: 1.2, // %
//   pin: 1111,
// };

// const account2 = {
//   owner: 'Jessica Davis',
//   movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
//   interestRate: 1.5,
//   pin: 2222,
// };

// const account3 = {
//   owner: 'Steven Thomas Williams',
//   movements: [200, -200, 340, -300, -20, 50, 400, -460],
//   interestRate: 0.7,
//   pin: 3333,
// };

// const account4 = {
//   owner: 'Sarah Smith',
//   movements: [430, 1000, 700, 50, 90],
//   interestRate: 1,
//   pin: 4444,
// };

// const accounts = [account1, account2, account3, account4];

// // Elements
// const labelWelcome = document.querySelector('.welcome');
// const labelDate = document.querySelector('.date');
// const labelBalance = document.querySelector('.balance__value');
// const labelSumIn = document.querySelector('.summary__value--in');
// const labelSumOut = document.querySelector('.summary__value--out');
// const labelSumInterest = document.querySelector('.summary__value--interest');
// const labelTimer = document.querySelector('.timer');

// const containerApp = document.querySelector('.app');
// const containerMovements = document.querySelector('.movements');

// const btnLogin = document.querySelector('.login__btn');
// const btnTransfer = document.querySelector('.form__btn--transfer');
// const btnLoan = document.querySelector('.form__btn--loan');
// const btnClose = document.querySelector('.form__btn--close');
// const btnSort = document.querySelector('.btn--sort');

// const inputLoginUsername = document.querySelector('.login__input--user');
// const inputLoginPin = document.querySelector('.login__input--pin');
// const inputTransferTo = document.querySelector('.form__input--to');
// const inputTransferAmount = document.querySelector('.form__input--amount');
// const inputLoanAmount = document.querySelector('.form__input--loan-amount');
// const inputCloseUsername = document.querySelector('.form__input--user');
// const inputClosePin = document.querySelector('.form__input--pin');

// /////////////////////////////////////////////////
// /////////////////////////////////////////////////
// // LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// /////////////////////////////////////////////////
// // Coding Challenge 1

// TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]

const dogsJuliaD1 = [3, 5, 2, 12, 7];
const dogsKateD1 = [4, 1, 15, 8, 3];

// TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

const dogsJuliaD2 = [9, 16, 6, 8, 3];
const dogsKateD2 = [10, 5, 6, 1, 4];

const checkDogs = function (arr1, arr2) {
  const dogsJuliaCorrected = arr1.slice(1, -2);
  const dogsAll = dogsJuliaCorrected.concat(arr2);
  dogsAll.forEach((age, index) => {
    const isAdult = age >= 3 ? 'an adult' : 'still a puppy 🐶';
    console.log(
      `Dog number ${index + 1} is ${isAdult}, and is ${age} years old`
    );
  });
};

checkDogs(dogsJuliaD1, dogsKateD1);
console.log('----------');
checkDogs(dogsJuliaD2, dogsKateD2);

// TEST DATA 1
const dogAges1 = [5, 2, 4, 1, 15, 8, 3];

// TEST DATA 2
const dogAges2 = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = dogAges => {
  const averageHumanAge = dogAges
    .map(dogAge => (dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4))
    .filter(humanAge => humanAge >= 18)
    .reduce((avgAge, age, i, arr) => avgAge + age / arr.length, 0);
  console.log(averageHumanAge);
  return averageHumanAge;
};

calcAverageHumanAge(dogAges1);
calcAverageHumanAge(dogAges2);

// Coding Challenge 4

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// 1.
dogs.forEach(
  dog => (dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28))
);

console.log(dogs);

// 2.
dogs.forEach(dog => {
  if (dog.owners.includes('Sarah')) {
    const result =
      dog.curFood <= dog.recommendedFood * 1.1 &&
      dog.curFood >= dog.recommendedFood * 0.9
        ? 'just nice'
        : dog.curFood < dog.recommendedFood * 0.9
        ? 'too less'
        : 'too much';
    console.log(
      dog.curFood,
      dog.recommendedFood,
      `Sarah\'s dog is eating ${result}.`
    );
  }
});

// 3.
const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recommendedFood * 1.1)
  .flatMap(dog => dog.owners);

const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recommendedFood * 0.9)
  .flatMap(dog => dog.owners);

// 4.
console.log(ownersEatTooMuch.join(' and ') + "'s dog eat too much!");
console.log(ownersEatTooLittle.join(' and ') + "'s dog eat too little!");

// 5.
console.log(dogs.some(dog => dog.curFood === dog.recommendedFood));

// 6.
console.log(
  dogs.some(
    dog =>
      dog.curFood <= dog.recommendedFood * 1.1 &&
      dog.curFood >= dog.recommendedFood * 0.9
  )
);

// 7.
const dogsEatingOkay = dogs.filter(
  dog =>
    dog.curFood <= dog.recommendedFood * 1.1 &&
    dog.curFood >= dog.recommendedFood * 0.9
);

console.log(dogsEatingOkay);

// 8.
console.log(dogs.slice().sort((a, b) => a.recommendedFood - b.recommendedFood));
console.log(dogs);
