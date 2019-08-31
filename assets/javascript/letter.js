// Word Game - Node - letter Class

// class for letters of the puzzle word
class Letter {
  constructor(wordLetter,isGuessed = false) {
    // constructor
    this.wordLetter = wordLetter;
    this.isGuessed = isGuessed;
    }

  //methods

  // get letter - returns the letter in its current state of known or masked
  getLetter() {
    console.log('in Letter Class Object.getLetter');
    return (this.isGuessed) ? this.wordLetter : '_';
  }

  // check and set letter's current state against parmeter and set state to known or masked
  setLetter(letter) {
    console.log('in Letter Class Object.setLetter');
    (letter.toUpperCase() === this.wordLetter) ? this.isGuessed = true : this.isGuessed = false;
  }

}

// module.exports for use in other .js files
module.exports = {
  Letter: Letter
};