const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
console.log(game.scored.entries());

for (const item of game.scored.entries()) {
  console.log(`Goal ${item[0] + 1} : ${item[1]}`);
}

const odds = Object.values(game.odds);
console.log(odds);

let sum = 0;
for (const value of odds) {
  sum += value;
}
let evarage = sum / odds.length;
console.log(Object.entries(game.odds));

console.log(game['score']);

for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
}
// for(const [team,odd] of Object.entries(game.odds)) {
// oddStr=team==='x' ?'draw : `${game[team]}`

// }

// const players1 = game.players[0];
// const players2 = game.players[1];

// const [players1, players2] = game.players;

// const [gk, ...fieldPlayers] = players1;

// console.log(gk, fieldPlayers);

// //3.

// const allPlayers = [...players1, ...players2];

// const players1Filnal = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, team2, draw);

// //6.
// const printGoals = function (.players) {

// };
