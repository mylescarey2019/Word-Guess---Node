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
    console.log('in Word Class Object.init');
    // iterate over the string and instansiate new letter object - push into letters array
    [...this.word].forEach(char => this.letters.push(new letterClass.Letter(char))); 
  }

  // return formatted string ready for use on the terminal
  // has 2 spaces between letters and 4 spaces between words and initial
  // example: 'G  E  O  R  G  E    W    B  U  S  H'
  // example: '_  _  _  _  _  _    _    _  _  _  _'  
  getWord() {
    console.log('in Word Class Object.getWord');
    // psuedo code
    // 1.  iterate over this.word
    // 2.  if space then push 4 spaces on to string
    // 3.  if not space then call letters[i].getLetter()
    // 4.  push onto output string
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

    // for (var i = 0 ; i < wordLength; i++) {
    //   displayableWord += this.letters[i].getLetter();
    //   console.log(this.word[i] + ' ' + displayableWord);
    //   // if not the last letter in word then add necessary whitespace
    //   if (i < wordLength - 1) {
    //     (this.word[i + 1] === ' ') ? displayableWord += '    ' : displayableWord += '  ';
    //     console.log(this.word[i] + ' ' + displayableWord);
    //   }
    // };

    return displayableWord;
  };

  


  // dump letters array
  hello() {
    console.log('in Word Class Object.hello');
    console.log(this.letters);
  }
  // // get letter - returns the letter in its current state of known or masked
  // getLetter() {
  //   console.log('in Word Class Object.getLetter');
  //   return (this.isGuessed) ? this.wordLetter : '_';
  // }

  // // check and set letter's current state against parmeter and set state to known or masked
  // setLetter(letter) {
  //   console.log('in Word Class Object.setLetter');
  //   (letter.toUpperCase() === this.wordLetter) ? this.isGuessed = true : this.isGuessed = false;
  // }

}

// module.exports for use in other .js files
module.exports = {
  Word: Word
};