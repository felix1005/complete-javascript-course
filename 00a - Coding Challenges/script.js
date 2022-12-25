"use strict";

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const [players1, players2] = game.players;
const [gk, ...fieldPlayers] = players1;
const allPlayers = [...players1, ...players2];
const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
const {
  odds: { team1, x: draw, team2 },
} = game;

console.log(team1, draw, team2);

const printGoals = function (...players) {
  console.log(players.length, ...players);
};

printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
printGoals(...game.scored);

console.log(team1, draw, team2);

team1 < team2 && console.log("Team 1 is likely to win");
team1 > team2 && console.log("Team 2 is likely to win");

// Coding Challenge #2.1
for (const [goal, player] of game.scored.entries()) {
  console.log(`Goal ${goal + 1}: ${player}`);
}

// Coding Challenge #2.2
const odds = Object.entries(game.odds);
let sumOdds = 0;
for (const [key, value] of odds) {
  sumOdds += value;
}
const avgOdds = sumOdds / odds.length;

console.log(avgOdds);

// Coding Challenge #2.3
for (const [key, value] of odds) {
  game[key] && console.log(`Odd of victory ${game[key]}: ${value}`);
  game[key] ?? console.log(`Odd of draw: ${value}`);
}

// Coding Challenge #2.4
const scorers = {};

for (const player of game.scored) {
  scorers[player] && (scorers[player] += 1);
  scorers[player] ?? (scorers[player] = 1);
}
console.log(scorers);

// Coding Challenge #3
const gameEvents = new Map([
  [17, "⚽️ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽️ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽️ GOAL"],
  [80, "⚽️ GOAL"],
  [92, "🔶 Yellow card"],
]);

// Coding Challenge #3.1
const events = [...new Set(gameEvents.values())];
console.log(events);

// Coding Challenge #3.2
gameEvents.delete(64);
console.log(gameEvents);

// Coding Challenge #3.3
let timeLog = 0;
let timeAverage = 0;

for (const timeEvent of gameEvents.keys()) {
  timeAverage += timeEvent - timeLog;
  timeLog = timeEvent;
}
timeAverage /= gameEvents.size;
console.log(`An event happened, on average, every ${timeAverage} minutes`);

// Coding Challenge #3.4
for (const [time, event] of gameEvents.entries()) {
  console.log(
    `${time <= 45 ? "[FIRST HALF]" : "[SECOND HALF]"} ${time}: ${event}`
  );
}
