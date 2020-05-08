// import WordPool class - WordPool class consists of array of Word objects
const { WordPool } = require("./wordpool.js");

// class for game
// this contains the core letter guessing logic, tracks game score, and draws down the word pool
class Game {
  constructor(puzzelWordList) {
    //this.puzzelWordList = puzzelWordList;
    this.wordPool = new WordPool(puzzelWordList);   // instansiate wordPool object
    this.guesses = 6;
    this.state = '';
    this.currentWord = '' // word object
    this.savedDisplayableWord = ''; // used during guess comparison; set by nextWord method
    this.wordsWon = 0;
    this.wordsLost = 0;
    this.lettersGuessed = []; // array of alphas that have already been guessed
    this.hasWord = false; // a word has been retrieved by method getWordFromPool and is ready for use 
    //this.wordPool.showWords();  // diagnotic only - comment out after testing
    this.nextWord();  // get the first word to play with, reset guesses and letters used
    console.log('\nWelcome to Word Guess - US Presidential Edition');
    console.log('Solve each of the 44 president name puzzles, use keyboard A through Z');
    console.log('You lose the word if you accumlate 6 missed guesses, lets begin.');
    console.log(`\nThe first name is [ ${this.savedDisplayableWord} ]`);
  }

  // reset guess count, clear used letter array, get next word object from pool
  nextWord() {
    this.guesses = 6;
    this.lettersGuessed.splice(0, this.lettersGuessed.length);
    this.currentWord = this.wordPool.getWordFromPool();
    this.hasWord = true;
    // record current diplayable word - to be used to determine if new letter guess unveiled any new letters
    this.savedDisplayableWord = this.currentWord.getDisplayableWord();
  }

  // core logic for handling letter guess and puzzle state 
  processGuess(letterGuess) {
    // check to if guess key pressed valid letter or not
    const validateGuess = (letter) => {
      let valid = 'true';
      let errorMsg = '';
      let regex = /[a-zA-Z]/;
      
      if (letter === undefined) {
        valid = false;
        errorMsg = `You typed \'RETURN\' please type \'a\' through \'z\'`;
      } else if (letter.match(regex) === null) {
        valid = false;
        errorMsg = `You typed \'${letterGuess}\' please type \'a\' through \'z\'`;
      } else if (this.lettersGuessed.includes(letter.toUpperCase())) {
        valid = false;
        errorMsg = `\'${letter.toUpperCase()}\' has already been used.  Letters used: ${this.lettersGuessed.join('')}`;
      }
      return [valid, errorMsg];
    }
    
    // initial check on the guessed key press
    const [validGuess, guessErrorMsg] = validateGuess(letterGuess);
    if (validGuess) {
      //guess is a valid A-Z  - update the word object and used letter array
      this.currentWord.updateWord(letterGuess);
      this.lettersGuessed.push(letterGuess.toUpperCase());
    } else {
      this.state = 'KEEP GUESSING';
      return console.log(guessErrorMsg);
    }
    
    // display first line of guess result on console: hit or miss
    const consoleGuessResult = (isHit, roundOver) => {
      let message = `\'${letterGuess.toUpperCase()}\'`;
      message += (isHit) ? ' is a Hit.' : ' is a Miss.';
      message += (roundOver) 
                  ? '' 
                  : `  Name is [ ${newDisplayableWord} ]  Guesses remaining: ${this.guesses}` 
                  + `   Letters used: ${this.lettersGuessed.join('')}`;
      console.log(message);
    }
    
    // check for hit or miss : compare saved displayable word vs its new state
    let wordIsSolved = false;
    const newDisplayableWord = this.currentWord.getDisplayableWord();
    const isHit = (this.savedDisplayableWord !== newDisplayableWord); // guess is a Hit
    if (isHit) { 
      // reset the saved displayble word to the new word state
      this.savedDisplayableWord = newDisplayableWord;
      wordIsSolved = this.currentWord.isSolved();
      consoleGuessResult(isHit, wordIsSolved);
    }
    else { // guess is a Miss
      this.guesses--;
      consoleGuessResult(isHit, this.guesses === 0);
    }

    // if applicable, display 2nd line of guess result on console : word solved or out of guesses
    const consoleWordEndResult = (isSolved, gameOver) => {
      let message = '';
      message += (isSolved) ? 'You solved it. Name was [ ' : 'Out of guesses.  The name was [ ';
      message += this.currentWord.getSolvedDisplayableWord();
      message += (gameOver) ? ` ]` : ` ]  Your score is, Wins: ${this.wordsWon} Losses: ${this.wordsLost}`;
      console.log(message);
    }

    const gameOver = !this.wordPool.isWordRemaining();
    if (wordIsSolved) {
      this.wordsWon++;
      this.state = 'NEXT WORD';
      consoleWordEndResult(wordIsSolved,gameOver);
    }
    else { // not solved - see if out of guesses
      if (this.guesses === 0) {
        this.wordsLost++;
        this.state = 'NEXT WORD';
        consoleWordEndResult(wordIsSolved,gameOver);
      }
      else { // still have guesses remaining
        this.state = 'KEEP GUESSING';
      }
    }
  }
}

// module.exports for use in other .js files
module.exports = {
  Game: Game
};