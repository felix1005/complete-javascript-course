"use strict";

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// Test Data 1
// const averageDolphins = calcAverage(44, 23, 71);
// const averageKoalas = calcAverage(65, 54, 49);

// Test Data 2
const averageDolphins = calcAverage(85, 54, 41);
const averageKoalas = calcAverage(23, 34, 27);

console.log(averageDolphins, averageKoalas);

function checkWinner(avg1, avg2) {
    if (avg1 >= avg2 * 2) console.log(`Dolphins wins (${avg1} vs. ${avg2})`);
    else if (avg2 >= avg1 * 2) console.log(`Koalas wins (${avg2} vs. ${avg1})`);
    else console.log("No winner!");
}

checkWinner(averageDolphins, averageKoalas);
checkWinner(100, 200);