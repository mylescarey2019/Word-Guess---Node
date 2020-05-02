// import WordPool class - WordPool class consists of array of Word objects
var { WordPool } = require("./wordpool.js");

// class for game
// this contains the core letter guessing logic
class Game {
  constructor(puzzelWordList) {
    //this.puzzelWordList = puzzelWordList;
    this.wordPool = new WordPool(puzzelWordList);   // instansiate wordPool object
    this.guesses = 6;
    this.state = '';
    this.currentWord = ''
    this.savedDisplayableWord = '';
    this.wordsWon = 0;
    this.wordsLost = 0;
    this.lettersGuessed = []; // array of alphas that have already been guessed
    this.hasWord = false; // a word has been retrieved by method getWordFromPool and is ready for use 
    this.regex = /[a-zA-Z]/;  // used to validate letter guesses
    this.wordPool.showWords();  // diagnotic only - remove after testing
    this.nextWord();  // get the first word to play with
    console.log('\nWelcome to Word Guess - US Presidential Edition');
    console.log('Solve each of the 44 president name puzzles, use keyboard A through Z');
    console.log('You lose the word if you accumlate 6 missed guesses, lets begin.');
    console.log(`\nThe first name is [ ${this.savedDisplayableWord} ]`);
  }
  
  // set the current word to use in the puzzle
  nextWord() {
    // console.log('in Game Class Object.nextWord');
    this.hasWord = true;
    // reset the guess count and clear the used letter array
    this.guesses = 6;
    this.lettersGuessed.splice(0,this.lettersGuessed.length);
    // get a word from the pool
    this.currentWord = this.wordPool.getWordFromPool();
    // record current diplayable word - to be used to determine if new letter guess unveiled any new letters
    this.savedDisplayableWord = this.currentWord.getDisplayableWord();
  }

  // core logic for handling letter guess and puzzle state 
  processGuess(letterGuess) {
    // console.log('in Game Class Object.processGuess');
    //letter guess is RETURN key
    if (letterGuess === undefined) {
      console.log(`You typed \'RETURN\' please type \'a\' through \'z\'`);
      this.state = 'NOT A-Z';
      return;
    };

    //letter guess is not A thru Z
    if (letterGuess.match(this.regex) === null) {
      console.log(`You typed \'${letterGuess}\' please type \'a\' through \'z\'`);
      this.state = 'NOT A-Z';
      return;
    };

    //letter guess has is a repeat guess
    if (this.lettersGuessed.indexOf(letterGuess.toUpperCase()) !== -1) {
      console.log(`\'${letterGuess.toUpperCase()}\' has already been used.  Letters used: ${this.lettersGuessed.join('')}`);
      this.state = 'USED LETTER';
      return;
    };

    //letter guess is a valid A-Z  - update the word object
    this.currentWord.updateWord(letterGuess);
    // update the used letter array
    this.lettersGuessed.push(letterGuess.toUpperCase());



    
    // check for hit or miss : compare saved displayable word vs its new state
    // if different than letter was a hit
    var newDisplayableWord = this.currentWord.getDisplayableWord();
    if (this.savedDisplayableWord !== newDisplayableWord) { // guess is a Hit
      // reset the saved displayble word to the new word state
      this.savedDisplayableWord = newDisplayableWord;
      var wordIsSolved = this.currentWord.isSolved();
      if (wordIsSolved) {
        console.log(`\'${letterGuess.toUpperCase()}\' is a Hit.`);
      }
      else {
        console.log(`\'${letterGuess.toUpperCase()}\' is a Hit.  Name is [ ${newDisplayableWord} ]  Guesses remaining: ${this.guesses}   Letters used: ${this.lettersGuessed.join('')}`);
      }
    }
    else { // guess is a Miss
      this.guesses--;
      if (this.guesses > 0) {
        console.log(`\'${letterGuess.toUpperCase()}\' is a Miss.  Name is [ ${newDisplayableWord} ]  Guesses remaining: ${this.guesses}   Letters used: ${this.lettersGuessed.join('')}`);
      }
      else {
        console.log(`\'${letterGuess.toUpperCase()}\' is a Miss.`);
      }
    };

    // now we know if it was hit or miss and whether it was solved - next determine
    // if the hit solved it and if that was the last word
    // or if miss exhausted the guesses and if that was the last word

    // check if puzzle is solved
    if (wordIsSolved) {
      this.wordsWon++;
      if (this.wordPool.isWordRemaining()) {
        console.log(`You solved it. Name was [ ${this.currentWord.getDisplayableWord()} ]  Your score is, Wins: ${this.wordsWon} Losses: ${this.wordsLost}`);
        this.state = 'SOLVED';
      }
      else { // this was the final word
        console.log(`You solved it. Name was [ ${this.currentWord.getDisplayableWord()} ]`);
        this.state = 'SOLVED';
      }
    }
    else { // not solved - see if out of guesses
      if (this.guesses === 0) {
        this.wordsLost++;
        if (this.wordPool.isWordRemaining()) {
          console.log(`Out of guesses.  The name was [ ${this.currentWord.getSolvedDisplayableWord()} ]  Your score is, Wins: ${this.wordsWon} Losses: ${this.wordsLost}`);
          this.state = 'OUT OF GUESSES';
        }
        else { // this was the final word
          console.log(`Out of guesses.  The name was [ ${this.currentWord.getSolvedDisplayableWord()} ]`);
          this.state = 'OUT OF GUESSES';
        }
      }
      else { // still have guesses remaining
        this.state = 'STILL GUESSING';
      };
    }
  }
}

// module.exports for use in other .js files
module.exports = {
  Game: Game
};