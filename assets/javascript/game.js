// Word Game - Node - game Class

// wordPoolClass - logic to manage words
var wordPoolClass = require("./wordpool.js");

// wordClass - logic to manage words
var wordClass = require("./word.js");

// class for game
// this contains much of the game play logic 
class Game {
  constructor(puzzelWordList) {
    // constructor
    this.puzzelWordList = puzzelWordList;
    this.guesses = 6;
    this.state = '';
    this.currentWord = ''
    this.savedDisplayableWord = '';
    this.wordsWon = 0;
    this.wordsLost = 0;
    this.lettersGuessed = []; // array of alphas that have already been guessed
    this.hasWord = false; // word retrieved for use by method getWordFromPool
    this.wordPool = ''
    this.regex = /[a-zA-Z]/
    this.init();
  }

  //methods

  // initialize by creating word pool object and getting first word
  init() {
    // console.log('in Game Class Object.init');
    this.wordPool = new wordPoolClass.WordPool(this.puzzelWordList);
    this.wordPool.showWords();
    this.nextWord();
    console.log('Welcome to Word Guess - US Presidential Edition');
    console.log('Solve each of the 44 president name puzzles, use keyboard A through Z');
    console.log('You lose the word if you accumlate 6 missed guesses, lets begin.');
    console.log(`The first name is: ${this.savedDisplayableWord}`);
  }
  
  // set the current word to use in the puzzle
  nextWord() {
    // console.log('in Game Class Object.nextWord');
    this.hasWord = true;
    this.guesses = 6;
    this.state = 'NEW WORD';
    this.lettersGuessed.splice(0,this.lettersGuessed.length);
    this.currentWord = this.wordPool.getWordFromPool();
    // to be used to determine if new letter guess unvieled any new letters
    this.savedDisplayableWord = this.currentWord.getDisplayableWord();
  }

  // core logic for handling letter guess and puzzle state 
  // parameter is letter guess   &   return current game state 
  processGuess(letterGuess) {
    // console.log('in Game Class Object.processGuess');
    //Not alpha 
    if (letterGuess.match(this.regex) === null) {
      console.log(`You typed \'${letterGuess}\' please type \'a\' through \'z\'`);
      this.state = 'NOT A-Z';
      return;
    };
    //Already used
    if (this.lettersGuessed.indexOf(letterGuess.toUpperCase()) !== -1) {
      console.log(`\'${letterGuess.toUpperCase()}\' has already been used.  Letters used: ${this.lettersGuessed.join('')}`);
      this.state = 'USED LETTER';
      return;
    };

    // Valid A-Z to be processed - update the word object
    this.currentWord.updateWord(letterGuess);
    // update the used letter array
    this.lettersGuessed.push(letterGuess.toUpperCase());

    console.log(`\'${letterGuess.toUpperCase()}\' is new letter.  Letters used: ${this.lettersGuessed.join('')}`);

    // check for hit or miss : compare saved displayable word vs its new state
    // if different than letter was a hit
    var newDisplayableWord = this.currentWord.getDisplayableWord();
    if (this.savedDisplayableWord !== newDisplayableWord) {
      this.savedDisplayableWord = newDisplayableWord;
      console.log(`\'${letterGuess.toUpperCase()}\' is a Hit.  Word is: ${newDisplayableWord}   Guesses remaining: ${this.guesses}   Letters used: ${this.lettersGuessed.join('')}`);
    }
    else {
      this.guesses--;
      console.log(`\'${letterGuess.toUpperCase()}\' is a Miss.  Guesses remaining: ${this.guesses}`);
    };

    // now we know if it was hit or miss - next determine if it solved the word or exhausted the guesses

    // check if puzzle is solved
    if (this.currentWord.isSolved()) {
      this.wordsWon++;
      console.log(`You solved it. Your score is, Wins: ${this.wordsWon} Losses: ${this.wordsLost}`);
      // will have to see if there are any more words, for now just return
      this.state = 'SOLVED';
    }
    else { // not solved - see if out of guesses
      if (this.guesses === 0) {
        this.wordsLost--;
        console.log(`Out of guesses.  The word is: ${this.currentWord.getSolvedDisplayableWord()} Your score is, Wins: ${this.wordsWon} Losses: ${this.wordsLost}`);
        this.state = 'OUT OF GUESSES';
      }
      else {
        this.state = 'STILL GUESSING';
      };
    
      // if SOLVED or OUT OF GUESSES then have to see if any word left and assign one 
      // or maybe let index.js do that work
      return;
    }
  }
}

// module.exports for use in other .js files
module.exports = {
  Game: Game
};