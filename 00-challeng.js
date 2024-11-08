// CHALLENGE #1
// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the
// formula: BMI = mass / (height * height) (mass in kg and height in meters).
// Your task is to write some code to help them:
// Store Mark's and John's mass and height in variables called massMark, heightMark, massJohn and heightJohn.
// Calculate both their BMIs using the formula, and store the results in two variables called BMIMark and BMIJohn.
// Log the value of BMIMark and BMIJohn to the console.
// BONUS: Create a boolean variable markHigherBMI containing information about
// whether Mark has a higher BMI than John. Log it to the console too

let massMark = 78;
const heightMark = 1.69;
let massJohn = 92;
const heightJohn = 1.95;
const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
let markHigherBMI;

console.log(BMIMark);
console.log(BMIJohn);
markHigherBMI = (BMIMark > BMIJohn);
console.log(markHigherBMI);