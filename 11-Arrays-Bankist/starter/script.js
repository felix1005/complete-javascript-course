'use strict';

// /////////////////////////////////////////////////
// /////////////////////////////////////////////////
// // BANKIST APP

// // Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// // Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

// /////////////////////////////////////////////////
// /////////////////////////////////////////////////
// // LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// Generate Username
accounts.forEach(acc => {
  acc.username = acc.owner
    .toLowerCase()
    .split(' ')
    .map(word => word[0])
    .join('');
});

// Functions
const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((bal, mov) => bal + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

const displayMovements = function (acc) {
  acc.movements.forEach((mov, i) => {
    const movType = mov > 0 ? 'deposit' : 'withdrawal';
    containerMovements.insertAdjacentHTML(
      'afterbegin',
      `<div class="movements__row">
        <div class="movements__type movements__type--${movType}">${
        i + 1
      } ${movType}</div>
        <div class="movements__value">${mov}€</div>
      </div>`
    );
  });
};

const calcDisplaySummary = function (acc) {
  // Total Deposit
  const totalDeposit = acc.movements
    .filter(mov => mov > 0)
    .reduce((bal, mov) => bal + mov, 0);
  labelSumIn.textContent = `${totalDeposit}€`;

  // Total Withdrawal
  const totalWithdrawal = Math.abs(
    acc.movements.filter(mov => mov < 0).reduce((bal, mov) => bal + mov, 0)
  );
  labelSumOut.textContent = `${totalWithdrawal}€`;

  // Total Interest
  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter(interest => interest > 1)
    .reduce((total, int) => total + int);
  labelSumInterest.textContent = `${interest}€`;
};

const updateUI = function (acc) {
  // Display Movements
  displayMovements(acc);

  // Balance
  calcDisplayBalance(acc);

  // Display Summary
  calcDisplaySummary(acc);
};

// Login
let currentAcc;
btnLogin.addEventListener('click', e => {
  e.preventDefault();
  // inputLoginUsername.value = 'js';
  // inputLoginPin.value = '1111';
  // console.log(inputLoginUsername.value, inputLoginPin.value);

  currentAcc = accounts.find(acc => inputLoginUsername.value === acc.username);

  if (currentAcc && Number(inputLoginPin.value) === currentAcc.pin) {
    containerApp.style.opacity = 100;

    labelWelcome.textContent = `Hi, ${currentAcc.owner}`;

    containerMovements.innerHTML = '';

    updateUI(currentAcc);
  } else {
    containerApp.style.opacity = 0;
  }

  inputLoginUsername.value = inputLoginPin.value = '';
});
// btnLogin.blur();

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const transferAmount = Number(inputTransferAmount.value);
  const receiver = inputTransferTo.value;

  // verification of receiver account
  const receiverAcc = accounts.find(acc => receiver === acc.username);

  inputTransferTo.value = inputTransferAmount.value = '';

  if (
    receiverAcc &&
    receiverAcc !== currentAcc &&
    currentAcc.balance >= transferAmount
  ) {
    // Add -ve movement
    currentAcc.movements.push(-transferAmount);

    // add transfer amount to receiver acc.
    receiverAcc.movements.push(transferAmount);

    alert(
      `Successfully transferred ${transferAmount}€ to ${receiverAcc.owner}`
    );

    // Update UI
    updateUI(currentAcc);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const loanAmount = Number(inputLoanAmount.value);

  if (
    loanAmount > 0 &&
    currentAcc.movements.some(mov => mov >= loanAmount * 0.1)
  ) {
    currentAcc.movements.push(loanAmount);

    alert(`Loan of ${loanAmount}€ successfully credited account`);

    updateUI(currentAcc);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  if (
    inputCloseUsername.value === currentAcc.username &&
    Number(inputClosePin.value) === currentAcc.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAcc.username
    );
    accounts.splice(index, 1);
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = '';
});
