// Word Guess - Node hangman game - main program


// require for inquier
var inquirer = require("inquirer");

//gameClass - logic to manage the game
var gameClass = require("./game.js");

// global variables and functions
// instatiate objects 

// short version of word list - used for testing
var presidentNames = ["THE CAT","FISH ERIC"];

// word list for this theme
// var presidentNames = ["GEORGE WASHINGTON","JOHN ADAMS","THOMAS JEFFERSON","JAMES MADISON","JAMES MONROE","JOHN QUINCY ADAMS","ANDREW JACKSON",
// "MARTIN VAN BUREN","WILLIAM HARRISON",
// "JOHN TYLER","JAMES POLK","ZACHARY TAYLOR","MILLARD FILLMORE","FRANKLIN PIERCE","JAMES BUCHANAN","ABRAHAM LINCOLN","ANDREW JOHNSON",
// "ULYSSES S GRANT","RUTHERFORD B HAYES","JAMES GARFIELD", 
// "CHESTER ARTHUR","GROVER CLEVELAND","BENJAMIN HARRISON","WILLIAM MCKINLEY","THEODORE ROOSEVELT","WILLIAM H TAFT",
// "WOODROW WILSON", "WARREN HARDING","CALVIN COOLIDGE","HERBERT HOOVER",
// "FRANKLIN D ROOSEVELT","HARRY S TRUMAN","DWIGHT EISENHOWER","JOHN F KENNEDY","LYNDON JOHNSON","RICHARD NIXON","GERALD FORD",
// "JIMMY CARTER","RONALD REAGAN","GEORGE H W BUSH","BILL CLINTON","GEORGE W BUSH","BARACK OBAMA","DONALD TRUMP"];


// main recursive function - handles inquirer prompt and calling game object functions
const playLetter = function() {
  if (game.hasWord)  { // the game has a word to play with - start/continue 
    inquirer.prompt([
      {
        name: "letterGuess",
        message: "\nEnter letter \'a\' through \'z\'\n"
      }
    ]).then(function(answer){
      // process the letter
      // console.log(`word is ${game.currentWord.word}`);
      // console.log(`You entered: ${answer.letterGuess}`);
      // console.log(`the actual letter is: ${game.currentWord.letters[letterCount].letter} `)
      // console.log('figure out what the results are');
      // for now assume keyed was A thru Z - apply it to the word.
      // console.log(`word was: ${game.currentWord.getDisplayableWord()}`);
      // game.currentWord.updateWord(answer.letterGuess);
      game.processGuess(answer.letterGuess[0]);
      // console.log(`word now is: ${game.currentWord.getDisplayableWord()} game state is: ${game.state} guesses remaining: ${game.guesses}`);
      // game.currentWord.showWordLetters();

      // game.state is one of the following:
      //    NOT A-Z        keep looping inquirer
      //    USED LETTER    keep looping inquirer
      //    STILL GUESSING keep looping inquirer
      //    SOLVED         get another word if one is available
      //    OUT OF GUESSES get another word if one is available
      // Get a new word then recursive call to playLetter() which will 
      // prompt user for another letter guess
      if (game.state === 'SOLVED' || game.state === 'OUT OF GUESSES') {
        game.hasWord = false;  // don't know if game will have word to play with yet
        if (game.wordPool.isWordRemaining()) {
          //get next word from pool
          game.nextWord();  // game.hasWord will be set to true by game.nextWord();
          console.log(`\nThe next name is [ ${game.currentWord.getDisplayableWord()} ]`);
        };
      };
      playLetter();  // recursive call


      // if (letterCount === game.currentWord.word.length - 1) {
      //   console.log(`word is done.  words remaining: ${game.wordPool.words.length} words remaining: ${game.wordPool.isWordRemaining()}`);
      //   // this word is done - go to the next one if there is one
      //   letterCount = 0;
      //   game.hasWord = false;  
      //   // wordCount++;
      //   if (game.wordPool.isWordRemaining()) {
      //     //get next word from pool
      //     game.nextWord();
      //     console.log(`next word is: ${game.currentWord.getDisplayableWord()}`);
      //   }
      //   // that was the last word - playLetter will catch it at top of function
      // }
      // else {
      //   letterCount++;  
      // };
      // playLetter();  // recursive call




      // REMOVE THIS ONCE PROGRAM IS WORKING AS DESIGNED:
      // // this the mock sequence used in early development - it just cycled thru guess count === word length
      // if (letterCount === game.currentWord.word.length - 1) {
      //   console.log(`word is done.  words remaining: ${game.wordPool.words.length} words remaining: ${game.wordPool.isWordRemaining()}`);
      //   // this word is done - go to the next one if there is one
      //   letterCount = 0;
      //   game.hasWord = false;  
      //   // wordCount++;
      //   if (game.wordPool.isWordRemaining()) {
      //     //get next word from pool
      //     game.nextWord();
      //     console.log(`next word is: ${game.currentWord.getDisplayableWord()}`);
      //   }
      //   // that was the last word - playLetter will catch it at top of function
      // }
      // else {
      //   letterCount++;  
      // };
      // playLetter();  // recursive call


    });
  } 
  else { // code in the end of game messages, score below - no time to do
    // a replay logic although it would be easy - just throw away the game object
    // and instansiate a new one - should consider doing this, except for the
    // asyncronise nature of the process
    console.log('\nGame over - all 44 names have been played')
    console.log(`\nThank you for playing, your final score is, Wins: ${game.wordsWon} Losses: ${game.wordsLost} `)
  };
};  
   
// -------------------------------------------------------------
// Main program flow
// -------------------------------------------------------------

// instansiate game object
var game = new gameClass.Game(presidentNames);

// REMOVE BELOW ONCE PROGRAM IS WORKING PER DESIGN:
// let letterCount = 0;

// this starts the letter request - response loop for the whole game
playLetter();



// REMOVE BELOW ONCE PROGRAM IS WORKING PER DESIGN:

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
