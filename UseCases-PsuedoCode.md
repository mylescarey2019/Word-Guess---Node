
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
    5. repeat above until pool of presidential names exhausted.

## User Stories / Use Cases

1.  user starts bash session

#/// **** CONTINUE HERE - 8-30-2019 ****  ///

2.  user enters spotify-this-song song-name
    1. spotify API returns information about song-name  
        1. artist(s)
        2. song name
        3. preview link of song
        4. album song is from
    2. if no song-name entered default to "My way"

3.  user enters movie-this movie-name
    1. OMDB API returns information about movie-name
        1. title of movie
        2. release year
        3. IMDB rating
        4. Rotten tomatoes rating
        5. country of origin
        6. language
        7. plot
        8. actors
    2. if no movie-name entered the default movie-name to 'Mr. Nobody'

4.  user enters concert-this artist/band-name
    1. Bands in Town API returns information about upcoming concerts for the artist
        1. name of venue
        2. venue location
        3. data of event formatted as MM/DD/YYYY (use moment library)

4.  user enters do-what-says
    1. the random.txt file is read and its command is executed 
        1. value in random.txt can be for any of the three commands

5.  corrective command interpretation
    1. if user mis-spells one of the 3 commands (spotify-this, movie-this
    concert-this) liri will respond asking if user meant to type the correct name
        1. example move-dis the martian would result in 
        2. did you mean movie-this the martian Y/N?
    2. if user answers Y then liri will execute the corrected command
    3. if user answers N then lire will print list of valid commands and
       terminate
      

### Psuedo Code - details TBD

1. Global
    1. Variables
    2. Functions

2. Objects/Classes
    1. letter
        1. Properties
            1. none
        2. Methods
            1. getSong
    2. word
        1. Properties
            1. apiKey in constructor
        2. Methods
            1. getMovie
    3. index
        1. Properties
            1. apiKey in constructor
        2. Methods
            1. getConcert
      

3. Program Flow
    1. determine command entered
        1. if not exact match of command name but close and parameter follows then ask user if they meant the actual command 
            1. if yes then execute command
            2. if no then print help command list
        2. if exact match but no parameter
            1. use default parameter
        3. if exact match of a command then execute the command
            1. spotify-this-song
            2. movie-this
            3. concert-this
            4. do-what-it-says
                1. reads random.txt and execute appropriate command
                    1. should do same close and missing parameter check as if
                    entered on command line
                2. if no random.txt tell users


         
