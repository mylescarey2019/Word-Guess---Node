// Word Game - Node - letter Class

// class for letters of the puzzle word
class Letter {
  constructor(letter,isKnown = (letter === ' ' ? true : false)) {
    // constructor
    this.letter = letter;
    this.isKnown = isKnown;
    }

  //methods

  // get letter - returns the letter in its current state of known or masked
  getLetter() {
    // console.log('in Letter Class Object.getLetter');
    return (this.isKnown) ? this.letter : '_';
  }

  // check and set letter's current state against parmeter and set state to known or masked
  setLetter(letter) {
    // console.log('in Letter Class Object.setLetter');
    // console.log(`this guess letter is ${letter} the letter value is ${this.letter}`)
    if(letter.toUpperCase() === this.letter.toUpperCase()) this.isKnown = true;
  }

}

// module.exports for use in other .js files
module.exports = {
  Letter: Letter
};