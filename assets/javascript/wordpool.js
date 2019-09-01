// Word Game - Node - letter Class

// wordClass - logic to manage words
var wordClass = require("./word.js");

// class for word pool in the puzzle
// takes a string of words and creates word pool object that manages those words
class WordPool {
  constructor(puzzelWordList) {
    // constructor
    this.puzzelWordList = puzzelWordList;
    this.words = []; // array of word objects
    this.init();
  }

  //methods

  // initialize by creating array of words for the wordList paramter
  init() {
    console.log('in WordPool Class Object.init');
    // randomly pull words from the wordList array and instansiate new word object - push into words array
    // remove word from wordList - continue until all words built
    // return it to the caller
    var listLength = this.puzzelWordList.length;
    for (let i = 0; i < listLength; i++) {
      var nextWord = this.puzzelWordList[Math.floor(Math.random() * this.puzzelWordList.length)];
      // console.log(`iteration : ${i} word is : ${nextWord}`);
      this.words.push(new wordClass.Word(nextWord));
      // remove element from puzzleWordList
      // console.log(`count of elements : ${this.puzzelWordList.length}`);
      this.puzzelWordList.splice(this.puzzelWordList.indexOf(nextWord),1);
      // console.log(`count of elements : ${this.puzzelWordList.length}`);
    };
  }

  // returns whether any words remaining
  isWordRemaining() {
  console.log('in Word Class Object.isWordRemaining');
  // return whether words are left
    return (this.words.length > 0) ? true : false;
  }

  // return next word from pool and remove it
  getWordFromPool() {
    console.log('in WordPool Class Object.getWordFromPool');
    return this.words.pop();
  } 
  
  // diagnostic word dump
  showWords(){
    for (let i = 0; i < this.words.length; i++) {
      console.log(`word ${i} is ${this.words[i].word}`);
    }
  }
}

// module.exports for use in other .js files
module.exports = {
  WordPool: WordPool
};