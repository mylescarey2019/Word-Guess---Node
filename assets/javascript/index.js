// Word Guess - Hangman style word guess game using theme
// of the US Presidents 
// Classes:
//    Letter    - one character of puzzle name and whether it is known or not
//    Word      - array of Letter objects for the puzzle name
//    WordPool  - array of Word objects with all the puzzle names
//    Game      - resolves letter guesses and console.logs play information
//
// Main - has command-line recursive loop to cycle through player guesses
//        and all puzzle words - i.e. US President names
//        Executes Game object methods 


// require for inquier
const inquirer = require("inquirer");

//gameClass - logic to manage the game
const { Game } = require("./game.js");

// global variables and functions

// shortened word lists for testing
//const presidentNames = ["AB","XYZ"];
//const presidentNames = ["ABC","KITTY"];
//const presidentNames = ["JAMES POLK","JOHN ADAMS"];
//const presidentNames = ["BARACK OBAMA"];

// full word list for this theme
const presidentNames = ["GEORGE WASHINGTON","JOHN ADAMS","THOMAS JEFFERSON","JAMES MADISON","JAMES MONROE","JOHN QUINCY ADAMS","ANDREW JACKSON",
"MARTIN VAN BUREN","WILLIAM HARRISON",
"JOHN TYLER","JAMES POLK","ZACHARY TAYLOR","MILLARD FILLMORE","FRANKLIN PIERCE","JAMES BUCHANAN","ABRAHAM LINCOLN","ANDREW JOHNSON",
"ULYSSES S GRANT","RUTHERFORD B HAYES","JAMES GARFIELD", 
"CHESTER ARTHUR","GROVER CLEVELAND","BENJAMIN HARRISON","WILLIAM MCKINLEY","THEODORE ROOSEVELT","WILLIAM H TAFT",
"WOODROW WILSON", "WARREN HARDING","CALVIN COOLIDGE","HERBERT HOOVER",
"FRANKLIN D ROOSEVELT","HARRY S TRUMAN","DWIGHT EISENHOWER","JOHN F KENNEDY","LYNDON JOHNSON","RICHARD NIXON","GERALD FORD",
"JIMMY CARTER","RONALD REAGAN","GEORGE H W BUSH","BILL CLINTON","GEORGE W BUSH","BARACK OBAMA","DONALD TRUMP"];

// instansiate game object  
const game = new Game(presidentNames);

// main recursive function - handles inquirer prompt and calling game object methods
const playLetter = () => {
  // check whether game has word to play with; if not then game over, return from recursion
  if (game.hasWord)  { // the game has a word to play with - start/continue 
    inquirer.prompt([
      {
        name: "letterGuess",
        message: "\nEnter a letter \'a\' through \'z\'\n"
      }
 //   ]).then(function(answer){ // convert to fat arrow function
    ]).then((answer) => {
      // process the letter guess - igorning any keyed character after the first one
      game.processGuess(answer.letterGuess[0]);
          //console.log(`Guess was: ${answer.letterGuess[0]} has word = ${game.hasWord} game state = ${game.state}`);
      // game.state is one of the following:
      //    KEEP GUESSING - keep looping by recursion
      //    NEXT WORD     - get next word if one is available

      // If word Solved or Out of Guesses - try to get a new word 
      if (game.state === 'NEXT WORD') {
        game.hasWord = false;  // don't know if game has any words left yet
        if (game.wordPool.isWordRemaining()) {
          game.nextWord();  // game.nextWord() will get the word and also toggle game.hasWord to true
          console.log(`\nThe next name is [ ${game.currentWord.getDisplayableWord()} ]`);
        }
      }
      // recursive call 
      playLetter();
    });
  } 
  else { // all names have been played
    console.log('\nGame over - all 44 names have been played')
    console.log(`\nThank you for playing, your final score is, Wins: ${game.wordsWon} Losses: ${game.wordsLost} `)
  }
} 
   
// -------------------------------------------------------------
// Main program flow
// -------------------------------------------------------------

// this starts the letter request/response loop for the whole game
playLetter();