// Word Guess - Node hangman game - main program


// require for inquier
var inquirer = require("inquirer");

// letterClass - logic to manage letters
// var letterClass = require("./letter.js");

//wordPoolClass - logic to a word pool
// var wordPoolClass = require("./wordpool.js");

//wordClass - logic to manage letters
// var wordClass = require("./word.js");

//gameClass - logic to manage the game
var gameClass = require("./game.js");

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

// short version of word list - used for testing
var presidentNames = ["CAT","GOAT"];

// word list for this theme
// var presidentNames = ["GEORGE WASHINGTON","JOHN ADAMS","THOMAS JEFFERSON","JAMES MADISON","JAMES MONROE","JOHN QUINCY ADAMS","ANDREW JACKSON",
// "MARTIN VAN BUREN","WILLIAM HARRISON",
// "JOHN TYLER","JAMES POLK","ZACHARY TAYLOR","MILLARD FILLMORE","FRANKLIN PIERCE","JAMES BUCHANAN","ABRAHAM LINCOLN","ANDREW JOHNSON",
// "ULYSSES S GRANT","RUTHERFORD B HAYES","JAMES GARFIELD", 
// "CHESTER ARTHUR","GROVER CLEVELAND","BENJAMIN HARRISON","WILLIAM MCKINLEY","THEODORE ROOSEVELT","WILLIAM H TAFT",
// "WOODROW WILSON", "WARREN HARDING","CALVIN COOLIDGE","HERBERT HOOVER",
// "FRANKLIN D ROOSEVELT","HARRY S TRUMAN","DWIGHT EISENHOWER","JOHN F KENNEDY","LYNDON JOHNSON","RICHARD NIXON","GERALD FORD",
// "JIMMY CARTER","RONALD REAGAN","GEORGE H W BUSH","BILL CLINTON","GEORGE W BUSH","BARACK OBAMA","DONALD TRUMP"];



// // instansiate word pool
// var myWordPool = new wordPoolClass.WordPool(presidentNames);
// myWordPool.showWords();


// recursive proto type experimentation  - try # 2
// var words = ['BUSH','OBAMA','LINCOLN'];

// var currentWord = '';
// let wordCount = 0;
// instansiate starter word
// var myWord = new wordClass.Word(words[wordCount]);
// console.log(`starter word is: ${myWord.getWord()}`);

// let wordActive = true;
// //simulate word play
// let letterCount = 0;


// const playLetterOLD = function() {
//    if (wordCount < 3) { // words to play 
//       // still playing this word
//       inquirer.prompt([
//         {
//           name: "letterGuess",
//           message: "enter letter \'a\' through \'z\'"
//         }
//       ]).then(function(answer){
//         // process the letter
//         console.log(`You entered: ${answer.letterGuess}`);
//         console.log(`the actual letter is: ${currentWord[letterCount]} `)
//         console.log('figure out what the results are');
//         // for now assume keyed was A thru Z - apply it to the word.
//         console.log(`word was: ${myWord.getWord()}`);
//         myWord.updateWord(answer.letterGuess);
//         console.log(`word now is: ${myWord.getWord()}`);
  
//         // here is where the heavy logic goes to determine
//         // if this word id done by solved or by guess exhausting 
//         // or is still active - for this simulator mock - just move to next letter
//         letterCount++;
//         if (letterCount === currentWord.length) {
//           // this word is done - go to the next one if there is one
//           letterCount = 0;
//           wordCount++;
//           if (wordCount < 3) {
//             //displose of previous word and reuse variable myWord
//             myWord = new wordClass.Word(words[wordCount]);
//             console.log(`next word is: ${myWord.getWord()}`);
//             currentWord = words[wordCount];
//           }
//           // that was the last word - playLetter will catch it at top of function
//         };  // else - already incrmented letter count so go on. 
//         playLetter();
//       });
//     } 
//     else {
//       console.log('all words have been played')
//     };
//   };  



const playLetter = function() {
  if (game.hasWord)  { // word to play 
    // still playing this word
    inquirer.prompt([
      {
        name: "letterGuess",
        message: "enter letter \'a\' through \'z\'"
      }
    ]).then(function(answer){
      // process the letter
      console.log(`word is ${game.currentWord.word} letter count: ${letterCount} word length is: ${game.currentWord.word.length}`);
      console.log(`You entered: ${answer.letterGuess}`);
      console.log(`the actual letter is: ${game.currentWord.letters[letterCount].letter} `)
      // console.log('figure out what the results are');
      // for now assume keyed was A thru Z - apply it to the word.
      console.log(`word was: ${game.currentWord.getWord()}`);
      // game.currentWord.updateWord(answer.letterGuess);
      game.processGuess(answer.letterGuess[0]);
      console.log(`word now is: ${game.currentWord.getWord()} game state is: ${game.state} guesses remaining: ${game.guesses}`);
      game.currentWord.hello();

      // here is where the heavy logic goes to determine
      // if this word id done by solved or by guess exhausting 
      // or is still active - for this simulator mock - just move to next letter
     

      if (letterCount === game.currentWord.word.length - 1) {
        console.log(`word is done.  words remaining: ${game.wordPool.words.length} words remaining: ${game.wordPool.isWordRemaining()}`);
        // this word is done - go to the next one if there is one
        letterCount = 0;
        game.hasWord = false;  
        // wordCount++;
        if (game.wordPool.isWordRemaining()) {
          //get next word from pool
          game.nextWord();
          console.log(`next word is: ${game.currentWord.getWord()}`);
        }
        // that was the last word - playLetter will catch it at top of function
      }
      else {
        letterCount++;  
      };
      playLetter();  // recursive call
    });
  } 
  else {
    console.log('all words have been played')
  };
};  
   
// -------------------------------------------------------------
// Main program flow
// -------------------------------------------------------------
// currentWord = words[wordCount];
// playLetter();

console.log(`number of president names is ${presidentNames.length}`);

// instansiate game object
var game = new gameClass.Game(presidentNames);
// get first word from pool
game.nextWord();
// console.log(`current word is: ${game.currentWord.word}`);
// count to iterate thru word's letters - use only for simulation mock
let letterCount = 0;
// this starts the letter request - response loop for the whole game
playLetter();
