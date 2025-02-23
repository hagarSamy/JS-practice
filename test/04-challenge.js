/* 1. Create one player array for each team (variables 'players1' and 'players2')
The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) 2. create one variable ('gk') with the goalkeeper's name,
and one array ('fieldPlayers') with all the remaining 10 field players
   3. Csreate an array 'allPlayers' containing all players of both teams (22 players)
During the game, Bayern Munich (team 1) ued 3 substitute players. So 4. create a new array ('players Final') containing all the original teaml players plus 'Thiago', 
'Coutinh'o and 'Perisic'
Based on the game.odds object, 5. create one variable for each odd (called 'teaml', 'draw' and 'team2')
---
The team with the lower odd is more likely to win. 7. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.
SC
TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scorerd
*/

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

const players1 = game.players[0];
const players2 = game.players[1];

console.log(players1, players2);

const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

const allPlayers = [...players1, ...players2];
const players_Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
const {team1: team1, x: draw, team2: team2}= game.odds;
// 6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, 
// along with the number of goals who were scored (number of player names passed in)
const printGoals = function(...playerNmaes) {
    console.log(...playerNmaes, playerNmaes.length);
}
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);
team1 > team2 && console.log('Team2 is more likely to win');
team1 < team2 && console.log('Team1 is more likely to win');