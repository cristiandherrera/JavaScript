"use strict";

// *******************
// Coding Challenge #1
// *******************

// const game = {
//   team1: "Bayern Munich",
//   team2: "Borrussia Dortmund",
//   players: [
//     [
//       "Neuer",
//       "Pavard",
//       "Martinez",
//       "Alaba",
//       "Davies",
//       "Kimmich",
//       "Goretzka",
//       "Coman",
//       "Muller",
//       "Gnarby",
//       "Lewandowski",
//     ],
//     [
//       "Burki",
//       "Schulz",
//       "Hummels",
//       "Akanji",
//       "Hakimi",
//       "Weigl",
//       "Witsel",
//       "Hazard",
//       "Brandt",
//       "Sancho",
//       "Gotze",
//     ],
//   ],
//   score: "4:0",
//   scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
//   date: "Nov 9th, 2037",
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// // 1.
// const [players1, players2] = game.players;
// console.log(players1, players2);
// console.log("");

// // 2.
// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);
// console.log("");

// // 3.
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);
// console.log("");

// // 4.
// const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
// console.log(players1Final);
// console.log("");

// // 5.
// const { team1: team1, x: draw, team2: team2 } = game.odds;
// console.log(team1, draw, team2);
// console.log("");

// // 6.
// let goals = 0;
// const printGoals = (...scored) => {
//   for (let i = 0; i < scored.length; i++) {
//     goals = scored.length;
//   }
//   console.log(goals, scored);
// };

// const data = ["Davies", "Muller", "Lewandowski", "Kimmich"];
// // const { scored: scored } = game;
// printGoals(...data);
// printGoals(...game.scored);

// // 7.
// const odds = team1 < team2 && console.log("team1 will win");
// const odds = team1 > team2 && console.log("team2 will win");

// *******************
// Coding Challenge #2
// *******************

// const game = {
//   team1: "Bayern Munich",
//   team2: "Borrussia Dortmund",
//   players: [
//     [
//       "Neuer",
//       "Pavard",
//       "Martinez",
//       "Alaba",
//       "Davies",
//       "Kimmich",
//       "Goretzka",
//       "Coman",
//       "Muller",
//       "Gnarby",
//       "Lewandowski",
//     ],
//     [
//       "Burki",
//       "Schulz",
//       "Hummels",
//       "Akanji",
//       "Hakimi",
//       "Weigl",
//       "Witsel",
//       "Hazard",
//       "Brandt",
//       "Sancho",
//       "Gotze",
//     ],
//   ],
//   score: "4:0",
//   scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
//   date: "Nov 9th, 2037",
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// // 1.
// for (const [index, players] of game.scored.entries()) {
//   console.log(`Goal ${index + 1}: ${players}`);
// }
// console.log("");

// // 2.
// const odds = Object.values(game.odds);
// let sum = 0;
// for (const avg of odds) {
//   sum += avg;
// }
// const total = sum / odds.length;
// console.log(total);

// // 3.
// const entries = Object.entries(game.odds);
// console.log(entries);

// for (const [key, value] of entries) {
//   const string = key === "x" ? `draw` : `victory ${game[key]}`;
//   console.log(key, value);
//   console.log(`Odd of ${string} ${value}`);
// }

// *******************
// Coding Challenge #3
// *******************

// const gameEvents = new Map([
//   [17, "⚽️ GOAL"],
//   [36, "🔁 Substitution"],
//   [47, "⚽️ GOAL"],
//   [61, "🔁 Substitution"],
//   [64, "🔶 Yellow card"],
//   [69, "🔴 Red card"],
//   [70, "🔁 Substitution"],
//   [72, "🔁 Substitution"],
//   [76, "⚽️ GOAL"],
//   [80, "⚽️ GOAL"],
//   [92, "🔶 Yellow card"],
// ]);

// // 1.

// const events = [...new Set(gameEvents.values())];
// console.log(events);

// // 2.

// gameEvents.delete(64);
// console.log(gameEvents);

// // 3.

// console.log(
//   `An event happened, on average, every ${90 / gameEvents.size} minutes`
// );

// // 4.

// for (const [min, event] of gameEvents) {
//   let string =
//     min >= 45
//       ? `[FIRST HALF]${min}: ${event}`
//       : `[SECOND HALF]${min}: ${event}`;
//   console.log(string);
// }
