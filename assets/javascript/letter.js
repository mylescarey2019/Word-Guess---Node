// class for letter in the puzzle's word
// letter starts unknown to player unless it is a space between names or intials
class Letter {
  constructor(letter,isKnown = (letter === ' ' ? true : false)) {
    this._letter = letter;
    this._isKnown = isKnown;
    }

  // if letter is not known display it as an underscore  
  get letter() {
    return (this._isKnown) ? this._letter : '_';
  }

  // if letter is guessed set isKnown to true else keep current state
  set isKnown(guessedLetter) {
    this._isKnown = (guessedLetter.toUpperCase() === this._letter.toUpperCase()) ? true : this._isKnown;
  }

  get isKnown() {
    return this._isKnown;
  }

  // force the letter to known state without guessing
  forceReveal() {
    this._isKnown = true;
  }
}

// module.exports for use in other .js files
module.exports = {
  Letter: Letter
};