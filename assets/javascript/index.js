// Word Guess - Node hangman game - main program


// require for inquier
var inquirer = require("inquirer");

// letterClass - logic to manage letters
// var letterClass = require("./letter.js");


// letterClass - logic to manage letters
// var wordClass = require("./word.js");

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
// var wordTest = new wordClass.Word('GEORGE W BUSH');

// wordTest.hello();
// console.log(`displayable word is: ${wordTest.getWord()}`);

// // recursive proto type experimentation  - try # 1
// var words = ['BUSH','OBAMA','LINCOLN'];
// var currentWord = '';
// let wordCount = 0;
// let wordActive = true;
// //simulate word play
// let letterCount = 0;

// const playLetter = function() {
//   wordCount++;
//   if (letterCount < currentWord.length) {
//     // still playing this word
//     inquirer.prompt([
//       {
//         name: "letterGuess",
//         message: "enter letter \'a\' through \'z\'"
//       }
//     ]).then(function(answer) {
//         // process the letter
//         console.log(`You entered: ${answer.letterGuess}`);
//         console.log(`the actual letter is: ${currentWord[letterCount]} `)
//         letterCount++;
//         // call playLetter recursively 
//         playLetter();
//     });
//   }
//   else {
//     // this word is completed so play the next one
//     playWord();
//   }

// };

// const playWord = function() {
//   // reset the letter count to start this new word
//   letterCount = 0;
//   if (wordCount < 3) {
//     // get next word
//     currentWord = words[wordCount];
//     console.log (`word count = ${wordCount} word is: ${currentWord}`)
//     console.log ('time to play this word');
//     playLetter();
//     //console.log("not waiting for you");
//     //wordCount++;

//     // call playWord recursively
//     //playWord();
//   };
//   console.log('no more words - all done')
// };

// // start the game
// playWord();
// console.log('time to show you your score');





// recursive proto type experimentation  - try # 2
var words = ['BUSH','OBAMA','LINCOLN'];
var currentWord = '';
let wordCount = 0;
let wordActive = true;
//simulate word play
let letterCount = 0;

const playLetter = function() {
  if (wordCount < 3) { // words to play 
    // still playing this word
    inquirer.prompt([
      {
        name: "letterGuess",
        message: "enter letter \'a\' through \'z\'"
      }
    ]).then(function(answer){
      // process the letter
      console.log(`You entered: ${answer.letterGuess}`);
      console.log(`the actual letter is: ${currentWord[letterCount]} `)
      console.log('figure out what the results are');
      // here is where the heavy logic goes to determine
      // if this word id done by solved or by guess exhausting 
      // or is still active - for this simulator mock - just move to next letter
      letterCount++;
      if (letterCount === currentWord.length) {
        // this word is done - go to the next one
        letterCount = 0;
        wordCount++;
        currentWord = words[wordCount];
      };  // else - already incrmented letter count so go on. 
      playLetter();
    });
  } 
  else {
    console.log('all words have been played')
  };
};  
    
// start up of flow
currentWord = words[wordCount];
playLetter();

