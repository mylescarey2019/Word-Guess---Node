// Word Game - Node - letter Class

// class for letters of the puzzle word
class Letter {
  constructor(letter,isKnown = (letter === ' ' ? true : false)) {
    // constructor
    this._letter = letter;
    this.isKnown = isKnown;
    }

  //methods

  // get letter - returns the letter in its current state of known or masked
  //** refactored during code review to use getter
  // method letter now acts a property - i.e. it can be invoked as myLetter.letter 
  // instead of myLetter.letter()
  get letter() {
    // console.log('in Letter Class Object.getLetter');
    return (this.isKnown) ? this._letter : '_';
  }

  // check and set letter's current state against parmeter and set state to known or masked
  checkIfKnown(letter) {
    // console.log('in Letter Class Object.setLetter');
    if(letter.toUpperCase() === this._letter.toUpperCase()) this.isKnown = true;
  }
}

// module.exports for use in other .js files
module.exports = {
  Letter: Letter
};