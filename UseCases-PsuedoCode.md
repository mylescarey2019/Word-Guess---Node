
# Word-Guess-Node

## Node version of Presidential themed name guess game

## Description

This node.js app has command line interface for playing a hangman style game using the US President names as a word set.

The game format is 

1.  User is presented with a random presidential name to guess showing letters as underscores initially
2.  User guess letter via keyboard - results reveiled
    1. letter not in name
    2. letter in name - underscores replaced with letter
    3. letter already used - list of previsouly used letters shown
    4. letter in name and solved the word - message followed by next word
    5. repeat above until pool of presidential names exhausted.  (if time permits allow replay of the whole set of names)

## User Stories / Use Cases

1.  user starts bash session

2.  user begins with node word-guess-node.js - programs begins in terminal
    1. displays 'Welcome to Word Guess - US Presidential Edition'
    2. displays 'Solve each of the 44 president name puzzles, use keyboard A through Z'
    3. displays 'You lose the puzzle if you accumlate 6 miss quesses, lets begin'
    4. displays the 'word is:   - - - - -    -    - - - -'  (for GEORGE W BUSH)
    5. displays the word in format of with underscores
        1. for readibilty:  2 spaces between each letter and 4 spaces between each name or initial
    6. 'Type letter a though z'

3.  user types non A through Z key
    1. display - "you typed '<key>' 'a' through 'z' only please"
    2. user can type again
  
4.  user types letter already used
    1. display - "you already used '<key>'"
    2. user can type again

5.  user types new letter that is not in puzzle and guesses remain
    1.  display 'Letter <key> is a miss, n guesses remaining'
    2.  user can type again

6.  user types new letter that is not in puzzle no remaining guesses
    1.  display 'Letter <key> is a miss, no remainig guesses'
    2.  display 'Solution is: G E O R G E    W    B U S H'
    3.  display 'Next Word'
    4.  displays the 'word is:   _ _ _ _    _ _ _ _ _ _ _'  (for B I L L    C L I N T O N)

7.  user types new letter that is in the puzzle but doesn't solve puzzle yet
    1.  display 'Letter <key> is a hit.
    2.  display 'word is:  G _ _ _ G _    _    _ _ _ _"  (for G in George W Bush)

8.  user types new letter that solves puzzle
    1.  display 'Solved, word is G E O R G E    W    B U S H'
    2.  display 'Next Word'
    4.  displays the 'word is:   _ _ _ _    _ _ _ _ _ _ _'  (for B I L L    C L I N T O N)

9.  user losses or solves last puzzle
    1. display 'Nice Game - you got X of 44 correct'
    2. *** if coding time permits allow for prompt to Play Again)
        1. this would re-randomize the word pool and start new game

      

### Psuedo Code - details TBD

1. Global
    1. Variables
    2. Functions

2. Objects/Classes
    1. letter
        1. Properties
            1. tbd
        2. Methods
            1. tbd 
    2. word
        1. Properties
            1. tbd
        2. Methods
            1. tbd
    3. index
        1. Properties
            1. tbd
        2. Methods
            1. tbd
    4. word pool
        1. Properties
            1. tbd
        2. Methods
            1. tbd

      

3. Program Flow
    1. To Be Determined (for now refer to use cases)
       
         
#/// **** CONTINUE HERE - 8-31-2019 ****  ///
