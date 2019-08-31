// Word Guess - Node hangman game - main program


// require for inquier
var inquirer = require("inquirer");

// letterClass - logic to manage letters
var letterClass = require("./letter.js");


// letterClass - logic to manage letters
var wordClass = require("./word.js");

// global variables and functions
// instatiate objects 

// // instansiate new Letter object(s) - for unit testing
// var letterX = new letterClass.Letter('X');
// var letterY = new letterClass.Letter('Y');
// var letterZ = new letterClass.Letter('Z');

// console.log(`letter X: ${letterX.getLetter()}`);
// letterX.setLetter('Q');
// console.log(`letter X: ${letterX.getLetter()}`);
// letterX.setLetter('x');
// console.log(`letter X: ${letterX.getLetter()}`);

// console.log(`letter Y: ${letterZ.getLetter()}`);
// console.log(`letter Z: ${letterX.getLetter()}`);

// instansiate new word object(s) - for unit testing
var wordTest = new wordClass.Word('GEORGE W BUSH');

wordTest.hello();
console.log(`displayable word is: ${wordTest.getWord()}`);