/*
CHALLENGE #1
Back to the two gymnastics teams, the Dolphins and the Koalas!
There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores
is calculated (so one average score per team).
A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!
Your tasks:
Create an arrow function calcAverage to calculate the average of 3 scores.
This function should have three parameters and return a single number (the average score).
Create two new variables — scoreDolphins and scoreKoalas,
and assign the value returned from the calcAverage function to them (you will need to call this function, and pass scores as arguments).
Create a function checkWinner that takes the average score of each team as parameters
(avgDolphins and avgKoalas), and then logs the winner to the console, together with
the victory points, according to the rule above. Example: Koalas win (30 vs. 13)
(use avgDolphins and avgKoalas instead of hard-coded values).
Use the checkWinner function to determine the winner for both DATA 1 and DATA 2.
Ignore draws this time. Instead, log No team wins... to the console if there is no winner.
*/

const calcAverage = (sc1, sc2, sc3) => (sc1 + sc2 + sc3) / 3;

const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  }
  else if (avgKoalas > avgDolphins * 2) {
    console.log(`Dolphins win (${avgKoalas} vs. ${avgDolphins})`);
  }
  else console.log("No team wins...")
};

checkWinner(scoreDolphins, scoreKoalas);