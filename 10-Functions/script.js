///////////////////////////////////////
// Coding Challenge #1
/* 
1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the
   input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. 
If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll 
object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/

const testData1 = [5, 2, 3];
const testData2 = '1, 5, 3, 9, 6, 1';

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  // 1, 2
  formattedOptions() {return this.options.join('\n')},
  registerNewAnswer() {
    const number = prompt(`${this.question}\n${this.formattedOptions()}\n (Write option number)`);
    if (number < 4 && number >= 0) {
      this.answers[number] += 1;
      // 4
      this.displayResults();
    }
  },
  // 3
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log("Poll results are " + this.answers.join(', '));
    }
  }
};
document.querySelector(".poll").addEventListener("click", poll.registerNewAnswer.bind(poll));
poll.displayResults.call({ answers: testData1 }, 'string');
poll.displayResults.call({ answers: testData2 });


///////////////////////////////////////
// Coding Challenge #2
/* 
This is more of a thinking challenge than a coding challenge 🤓
Take the IIFE (immediately invokedd function expression) below and at the end of the function, attach an event listener that changes the color of the selected h1 element 
('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!
And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, 
and what that means for the variables involved in this example.
GOOD LUCK 😀
*/

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  document.querySelector('body').addEventListener('click', () => { header.style.color = 'blue'; })
})();
