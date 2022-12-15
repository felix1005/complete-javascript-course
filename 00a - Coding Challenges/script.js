const averageDolphins = (97 + 112 + 90) / 3;
const averageKoalas = (109 + 95 + 90) / 3;
const minScore = 100;

console.log(averageDolphins, averageKoalas);

if (averageDolphins > averageKoalas && averageDolphins >= minScore) {
    console.log("The winner is Dolphins!");
} else if (averageKoalas > averageDolphins && averageKoalas >= minScore) {
    console.log("The winner is Koalas!");
} else if (averageKoalas === averageDolphins && averageKoalas >= minScore) {
    console.log("It is a DRAW!");
} else {
    console.log("No one wins the trophy!");
}