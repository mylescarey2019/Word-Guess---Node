
// main recursive function - handles inquirer prompt and calling game object functions
const playLetter = function() {
  if (game.hasWord)  { // the game has current word so start continue playing with it
    inquirer.prompt([
      {
        name: "letterGuess",
        message: "Enter letter \'a\' through \'z\'"
      }
    ]).then(function(answer){
      // process the letter
      console.log(`word is ${game.currentWord.word} letter count: ${letterCount} word length is: ${game.currentWord.word.length}`);
      // console.log(`You entered: ${answer.letterGuess}`);
      // console.log(`the actual letter is: ${game.currentWord.letters[letterCount].letter} `)
      // console.log('figure out what the results are');
      // for now assume keyed was A thru Z - apply it to the word.
      // console.log(`word was: ${game.currentWord.getDisplayableWord()}`);
      // game.currentWord.updateWord(answer.letterGuess);
      game.processGuess(answer.letterGuess[0]);
      console.log(`word now is: ${game.currentWord.getDisplayableWord()} game state is: ${game.state} guesses remaining: ${game.guesses}`);
      game.currentWord.showWordLetters();

      // here is where the heavy logic goes to determine
      // if this word id done by solved or by guess exhausting 
      // or is still active - for this simulator mock - just move to next letter
     

      // this mock sequence that must now be wired with actual game.state logic
      // psuedo code:
      // 1. guess was sent to game.ProcessGuess early above ^
      // 2. we should now know if the guess was:
      //    NOT A-Z        keep looping inquirer
      //    USED LETTER    keep looping inquirer
      //    SOLVED         get another word if one is available
      //    OUT OF GUESSES get another word if one is available
      //    STILL GUESSING keep looping inquirer
      // 
      // Next STEP is to re-wire the below to accomplish they above
      // if (game.state === 'SOLVED' || game.state === 'OUT OF GUESSES') {

      // };

      // if (game.state === 'NOT A-Z' || game.state === 'USED LETTER' || game.state === 'STILL GUESSING') {
      //   // keep looping
      // }
      // else 
      //   // get another word if one 
        

      // }


 
      if (letterCount === game.currentWord.word.length - 1) {
        console.log(`word is done.  words remaining: ${game.wordPool.words.length} words remaining: ${game.wordPool.isWordRemaining()}`);
        // this word is done - go to the next one if there is one
        letterCount = 0;
        game.hasWord = false;  
        // wordCount++;
        if (game.wordPool.isWordRemaining()) {
          //get next word from pool
          game.nextWord();
          console.log(`next word is: ${game.currentWord.getDisplayableWord()}`);
        }
        // that was the last word - playLetter will catch it at top of function
      }
      else {
        letterCount++;  
      };
      playLetter();  // recursive call



      // if (letterCount === game.currentWord.word.length - 1) {
      //   console.log(`word is done.  words remaining: ${game.wordPool.words.length} words remaining: ${game.wordPool.isWordRemaining()}`);
      //   // this word is done - go to the next one if there is one
      //   letterCount = 0;
      //   game.hasWord = false;  
      //   // wordCount++;
      //   if (game.wordPool.isWordRemaining()) {
      //     //get next word from pool
      //     game.nextWord();
      //     console.log(`next word is: ${game.currentWord.getDisplayableWord()}`);
      //   }
      //   // that was the last word - playLetter will catch it at top of function
      // }
      // else {
      //   letterCount++;  
      // };
      // playLetter();  // recursive call

      // REMOVE THIS ONCE PROGRAM IS WORKING AS DESIGNED:
      // // this the mock sequence used in early development - it just cycled thru guess count === word length
      // if (letterCount === game.currentWord.word.length - 1) {
      //   console.log(`word is done.  words remaining: ${game.wordPool.words.length} words remaining: ${game.wordPool.isWordRemaining()}`);
      //   // this word is done - go to the next one if there is one
      //   letterCount = 0;
      //   game.hasWord = false;  
      //   // wordCount++;
      //   if (game.wordPool.isWordRemaining()) {
      //     //get next word from pool
      //     game.nextWord();
      //     console.log(`next word is: ${game.currentWord.getDisplayableWord()}`);
      //   }
      //   // that was the last word - playLetter will catch it at top of function
      // }
      // else {
      //   letterCount++;  
      // };
      // playLetter();  // recursive call


    });
  } 
  else { // code in the end of game messages, score below - no time to do
    // a replay logic although it would be easy - just throw away the game object
    // and instansiate a new one - should consider doing this, except for the
    // asyncronise nature of the process
    console.log('all words have been played')
  };
};  
