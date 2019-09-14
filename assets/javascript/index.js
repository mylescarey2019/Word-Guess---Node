// Word Guess - Node hangman game - main program


// require for inquier
var inquirer = require("inquirer");

//gameClass - logic to manage the game
//***refactored after code review - object desconstruction
var { Game } = require("./game.js");

// global variables and functions

// shortened word list for testing
// var presidentNames = ["GEORGE WASHINGTON","HARRY S TRUMAN","BARACK OBAMA"];

// full word list for this theme
var presidentNames = ["GEORGE WASHINGTON","JOHN ADAMS","THOMAS JEFFERSON","JAMES MADISON","JAMES MONROE","JOHN QUINCY ADAMS","ANDREW JACKSON",
"MARTIN VAN BUREN","WILLIAM HARRISON",
"JOHN TYLER","JAMES POLK","ZACHARY TAYLOR","MILLARD FILLMORE","FRANKLIN PIERCE","JAMES BUCHANAN","ABRAHAM LINCOLN","ANDREW JOHNSON",
"ULYSSES S GRANT","RUTHERFORD B HAYES","JAMES GARFIELD", 
"CHESTER ARTHUR","GROVER CLEVELAND","BENJAMIN HARRISON","WILLIAM MCKINLEY","THEODORE ROOSEVELT","WILLIAM H TAFT",
"WOODROW WILSON", "WARREN HARDING","CALVIN COOLIDGE","HERBERT HOOVER",
"FRANKLIN D ROOSEVELT","HARRY S TRUMAN","DWIGHT EISENHOWER","JOHN F KENNEDY","LYNDON JOHNSON","RICHARD NIXON","GERALD FORD",
"JIMMY CARTER","RONALD REAGAN","GEORGE H W BUSH","BILL CLINTON","GEORGE W BUSH","BARACK OBAMA","DONALD TRUMP"];

// instansiate game object  
var game = new Game(presidentNames);

// main recursive function - handles inquirer prompt and calling game object functions
const playLetter = function() {
  if (game.hasWord)  { // the game has a word to play with - start/continue 
    inquirer.prompt([
      {
        name: "letterGuess",
        message: "\nEnter a letter \'a\' through \'z\'\n"
      }
    ]).then(function(answer){
      // process the letter - igorning any keyed character after the first one
      game.processGuess(answer.letterGuess[0]);

      // game.state is one of the following:
      //    NOT A-Z        keep looping inquirer
      //    USED LETTER    keep looping inquirer
      //    STILL GUESSING keep looping inquirer
      //    SOLVED         get another word if one is available
      //    OUT OF GUESSES get another word if one is available

      // If Solved or Out of Guesses - get a new word then recursive call playLetter() which will 
      // prompt user for next letter guess
      if (game.state === 'SOLVED' || game.state === 'OUT OF GUESSES') {
        game.hasWord = false;  // don't know if game will have word to play with yet
        if (game.wordPool.isWordRemaining()) {
          //get next word from pool
          game.nextWord();  // game.hasWord will be set to true by game.nextWord();
          console.log(`\nThe next name is [ ${game.currentWord.getDisplayableWord()} ]`);
        };
      };
      // recursive call 
      playLetter();
    });
  } 
  else { // all names have been played
    console.log('\nGame over - all 44 names have been played')
    console.log(`\nThank you for playing, your final score is, Wins: ${game.wordsWon} Losses: ${game.wordsLost} `)
  };
};  
   
// -------------------------------------------------------------
// Main program flow
// -------------------------------------------------------------

// this starts the letter request/response loop for the whole game
playLetter();
