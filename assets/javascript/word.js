// Word Game - Node - letter Class
//Object destructuring
// letterClass - logic to manage letters
// **refactored -object deconstruction
// *** was:  var letterClass  = require("./letter.js");
const { Letter } = require("./letter.js");

// class for word in the puzzle
// takes a string word and creates property array of letter objects
class Word {
  constructor(word) {
    //** refactored 
    this.word = word;
    // taking word which is a string(iteratble), iterating over it calling 
    // for new Letter Class object for each character in the string
    // building an Array "from" that iteration function return
    this.letters = Array.from(word, char => new Letter(char));
    console.log(`${this.word} : ${this.getDisplayableWord()}`);
    // this.init();
  }

  //methods

  //**refactored - no need for method - moved to constructor now
  // initialize by creating array of letters for the word parameter
  //  init() {
  //   // console.log('in Word Class Object.init');
  //   // iterate over the string and instansiate new letter object - push into letters array
  //   [...this.word].forEach(char => this.letters.push(new letterClass.Letter(char))); 
  // }


  // update the word's letters following a guess attempt
  updateWord(guessedLetter) {
  console.log('in Word Class Object.updateWord');
  console.log(`the guess letter is ${guessedLetter}`)
  // iterate over the this.letters and call setLetter for each letter
  // this will set the letter to isKnown if the letter guess is correct and not already known
  
  // **refactored
    // for (let currentLetter of this.letters) {
    //   currentLetter.checkIfKnown(guessLetter)
    // }
    //this.letters.map(char => char.checkIfKnown(guessLetter));
    //using setter... not sure if this is more clear code ?
    this.letters.map(char => char.isKnown = guessedLetter);
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
    // 5.  if not last letter then push 2 spaces on to output 
    
    // **refactored 
    // **note that letter is now referenced as a property 
    // instead of getLetter()  this is because it was converted
    // to a getter in the Letter Class
    // note the object desconstruction instead of use word property
    // the letter object from the letter array is deconstructed
    // to access its letter property :  {letter}
    return this.letters.map(({letter}, i) => {
      if (letter === ' ') return letter + '    ';
      else return i < this.letters.length - 1 ? letter + '  ' : letter;
    }).join('');

    // var displayableWord = '';
    // var wordLength = this.word.length;

    // for (var i = 0 ; i < wordLength; i++) {
    //   if (this.word[i] === ' ') {
    //     displayableWord += '    ';
    //   }
    //   else {
    //     displayableWord += this.letters[i].getLetter();
    //     // if not the last letter in word then add necessary whitespace
    //     if (i < wordLength - 1) {
    //       displayableWord += '  ';
    //     }
    //   }  
    // };
    // return displayableWord;
  };


  // solve the word and return displayable version
  // needed for when user has exhausted all guesses for a word
  getSolvedDisplayableWord() {
    // set all letters to known
    // ***refactored 
    //this.letters.map(letter => letter.isKnown = true);
    this.letters.map(letter => letter.forceReveal());
    // for (const letter of this.letters) {
    //   letter.isKnown = true;
    // };
    //this.showWordLetters();
    return this.getDisplayableWord();
  }


  // is the word solved  
  isSolved() {
  // ***refactored 
  // using getter
  return this.letters.every(letter => letter.isKnown);
  // return this.letters.every(letter => letter.isKnown ? true : false);
  // for (const letter of this.letters) {
  //     if(!letter.isKnown) return false;
  //   };
  //   return true;
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
