// Word Game - Node - letter Class

// letterClass - logic to manage letters
var letterClass = require("./letter.js");

// class for word in the puzzle
// takes a string word and creates property array of letter objects
class Word {
  constructor(word) {
    // constructor
    this.word = word;
    this.letters = [];
    this.init();
  }

  //methods

  // initialize by creating array of letters for the word paramter
  init() {
    // console.log('in Word Class Object.init');
    // iterate over the string and instansiate new letter object - push into letters array
    [...this.word].forEach(char => this.letters.push(new letterClass.Letter(char))); 
  }

  // update the word's letters following a guess attempt
  updateWord(guessLetter) {
  // console.log('in Word Class Object.updateWord');
  // console.log(`the guess letter is ${guessLetter}`)
  // iterate over the this.letters and call setLetter for each letter
  // this will set the letter to isKnown if the letter guess is correct and not already known
    for (let currentLetter of this.letters) {
      currentLetter.setLetter(guessLetter);
    }
  }

  // return formatted string ready for use on the terminal
  // has 2 spaces between letters and 4 spaces between words and any initial
  // example: 'G  E  O  R  G  E    W    B  U  S  H'
  // example: '_  _  _  _  _  _    _    _  _  _  _'  
  getDisplayableWord() {
    // console.log('in Word Class Object.getDisplayableWord');
    // psuedo code
    // 1.  iterate over this.word
    // 2.  if space then push 4 spaces on to string
    // 3.  if not space then call letters[i].getLetter()
    //     4.  push result onto output string
    // 5.  if not last letter then push 2 spaces on to output string
    var displayableWord = '';
    var wordLength = this.word.length;

    for (var i = 0 ; i < wordLength; i++) {
      if (this.word[i] === ' ') {
        displayableWord += '    ';
      }
      else {
        displayableWord += this.letters[i].getLetter();
        // if not the last letter in word then add necessary whitespace
        if (i < wordLength - 1) {
          displayableWord += '  ';
        }
      }  
    };
    return displayableWord;
  };


  // solve the word and return displayable version
  // needed for when user has exhausted all guesses for a word
  getSolvedDisplayableWord() {
    // set all letters to known
    for (const letter of this.letters) {
      letter.isKnown = true;
    };
    return this.getDisplayableWord();
  }


  // is the word solved  
  // ***REFACTOR - want more succint method if possible
  isSolved() {
  for (const letter of this.letters) {
      if(!letter.isKnown) return false;
    };
    return true;
  }


  // diagnostic display of word's letters array
  showWordLetters() {
    // console.log('in Word Class Object.hello');
    console.log(this.letters);
  }
}

// module.exports for use in other .js files
module.exports = {
  Word: Word
};