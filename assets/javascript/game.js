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
    this.wordsWon = 0;
    this.wordsLost = 0;
    this.lettersGuessed = []; // array of alphas that have already been guessed
    this.hasWord = false; // word retrieved for use by method getWordFromPool
    this.wordPool = ''
    this.regex = /[a-zA-Z]/
    this.init();
  }

  //methods

  // initialize by creating word pool object
  init() {
    // console.log('in Game Class Object.init');
    this.wordPool = new wordPoolClass.WordPool(this.puzzelWordList);
    this.wordPool.showWords();
  }
  
  // set the current word to use in the puzzle
  nextWord() {
    // console.log('in Game Class Object.nextWord');
    this.hasWord = true;
    this.guesses = 6;
    this.state = 'NEW WORD';
    this.lettersGuessed.splice(0,this.lettersGuessed.length);
    this.currentWord = this.wordPool.getWordFromPool();
  }

  // core logic for handling letter guess and puzzle state 
  // parameter is letter guess 
  // return current game state 
  processGuess(letterGuess) {
    console.log('in Game Class Object.processGuess');
    //Not alpha 
    if (letterGuess.match(this.regex) === null) {
      console.log(`You typed \'${letterGuess}\' please type \'a\' through \'z\'`);
      this.state = 'NOT A-Z';
      return;
    };
    //Already used
    if (this.lettersGuessed.indexOf(letterGuess.toUpperCase()) !== -1) {
      console.log(`\'${letterGuess.toUpperCase()}\' has already been used.  Letters used: ${this.lettersGuessed.join('')}`);
      this.state = 'USED';
      return;
    };

    // Valid A-Z to be processed
    // update the word object
    this.currentWord.updateWord(letterGuess);
    // update the used letter array
    this.lettersGuessed.push(letterGuess.toUpperCase());

    console.log(`\'${letterGuess.toUpperCase()}\' is new letter.  Letters used: ${this.lettersGuessed.join('')}`);

    // see if this was a hit or miss 
    // need new method in word to do this
    // then do stuff based on hit / miss 
    // then do stuff if solved or out of guesses

    // check if puzzle is solved
    if (this.game.currentWord.isSolved()) {
      // solved
      console.log(`You solved: ${game.currentWord.getDisplayableWord()}`);
      game.wordsWon++;
      console.log(`Your score is: Wins: ${game.wordsWon} Losses: ${game.wordsLost}`);
      // will have to see if there are any more words, for now just return
      this.state = 'SOLVED';
      return;
    }
    else {
      // not solved - 
      
    }
    this.guesses--;
    this.state = 'A-Z';
    return;


    //was this guess already done?
    //is this guess a hit
    //   has it solved the puzzle
    //is this guess a miss
    //   has it exhausted the guesses
    //
    // if solved or guesses exhausted are there words left
  }

}

// module.exports for use in other .js files
module.exports = {
  Game: Game
};