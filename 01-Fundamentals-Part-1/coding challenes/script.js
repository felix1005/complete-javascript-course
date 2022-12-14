const massJohn = 85;
const heightJohn = 1.76;
const bmiJohn = massJohn / heightJohn ** 2;
console.log("John:", massJohn, heightJohn, bmiJohn);

const massMark = 95;
const heightMark = 1.88;
const bmiMark = massMark / heightMark ** 2;
console.log("Mark:", massMark, heightMark, bmiMark);

const markHigherBMI = bmiMark > bmiJohn;


if (markHigherBMI) {
    console.log(`Mark's BMI (${bmiMark}) is higher than John's (${bmiJohn})!`);
} else {
    console.log(`John's (${bmiJohn}) is higher than Mark's BMI (${bmiMark})!`);
}