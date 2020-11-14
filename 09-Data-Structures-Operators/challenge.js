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
