// Word Game - Node - letter Class

// class for letters of the puzzle name
// letter starts unknown to player unless it is a space between names or intials
class Letter {
  constructor(letter,isKnown = (letter === ' ' ? true : false)) {
    this._letter = letter;
    this._isKnown = isKnown;
    }

  // if letter is not known display it as an underscore  
  get letter() {
    console.log('in Letter Class Object.get Letter');
    return (this._isKnown) ? this._letter : '_';
  }

  // check and set letter's current state against parmeter
  set isKnown(guessedLetter) {
    console.log('in Letter Class Object.set isKnown');
    this._isKnown = (guessedLetter.toUpperCase() === this._letter.toUpperCase()) ? true : this._isKnown;
    //if(guessedLetter.toUpperCase() === this._letter.toUpperCase()) this._isKnown = true;
  }
  get isKnown() {
    return this._isKnown;
  }

  // force the letter to known without guessing
  forceReveal() {
    this._isKnown = true;
  }

  // // check and set letter's current state against parmeter and set state to known or masked
  // checkIfKnown(letter) {
  //   // console.log('in Letter Class Object.setLetter');
  //   if(letter.toUpperCase() === this._letter.toUpperCase()) this.isKnown = true;
  // }
}

// module.exports for use in other .js files
module.exports = {
  Letter: Letter
};