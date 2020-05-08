# Word-Guess-Node

## Node version of Presidential themed name guess game


Utlizing Node.js, javascript ES6, classes and npm packages

## Description

This node.js app has command line interface for playing a hangman style game using the US President names as a word set.

The game format is 

1.  User is presented with a random presidential name to guess showing letters as underscores initially
2.  User guess letter via keyboard - results reveiled
    1. letter not in name
    2. letter in name - underscores replaced with letter
    3. letter already used - list of previsouly used letters shown
    4. letter in name and solved the word - message followed by next word
    5. repeat above until pool of presidential names exhausted.
    6. replay of the game will provide randomized order of names

## Details:

- #### Github project :    <a href="https://github.com/mylescarey2019/Word-Guess-Node">Word-Guess-Node Repository</a>

- #### For further development details see: 

  - ####  [UseCases and Psuedo Code](UseCases-PsuedoCode.md)

  - ####  [Test Cases](TestCases.md)

#### Example walkthru GIF (shows abreviated 3 word test) : 

#### ![word-guess-node-test](./assets/images/word-guess-node-test.gif)

## Getting Started

### Native and NPM Packages Used
1.  inquirer  - for interactive command line response on command typos


### Dependencies

* none 

### Installing

* none necessary 

### Executing program

* open terminal session
  1. run program:   node index
        1. follow in terminal instructions and prompts for play
  


## Authors

Myles Carey 
mylescarey2019@gmail.com 

## Version History

* 1.0 - Initial Release
* 1.1 - Refactored code to increase use of ES6 features/syntax, make existing classes DRYier and cleanup dead/commented out code

## License


## Acknowledgments

Thanks to beta testers - my 15yo & 17yo daughters and wife 

