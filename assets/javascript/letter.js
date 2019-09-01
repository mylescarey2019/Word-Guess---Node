// Word Game - Node - letter Class

// class for letters of the puzzle word
class Letter {
  constructor(letter,isGuessed = false) {
    // constructor
    this.letter = letter;
    this.isGuessed = isGuessed;
    }

  //methods

  // get letter - returns the letter in its current state of known or masked
  getLetter() {
    // console.log('in Letter Class Object.getLetter');
    return (this.isGuessed) ? this.letter : '_';
  }

  // check and set letter's current state against parmeter and set state to known or masked
  setLetter(letter) {
    // console.log('in Letter Class Object.setLetter');
    if(letter.toUpperCase() === this.letter) this.isGuessed = true;
  }

}

// module.exports for use in other .js files
module.exports = {
  Letter: Letter
};