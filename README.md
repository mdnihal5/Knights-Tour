# KnightsTour


This Repository contains a HTML ,CSS and JS file

    -------------------------------------------------> HTML <---------------------------------------------------------------------

It contains some divs and paragraph tags which are created to handle stats for the game
Along with this a div for Chess Board where cells are created dynamically using javascript
And A reset Button

    -------------------------------------------------> CSS <---------------------------------------------------------------------

This Css file contains styling for Chess Board and stats board 
Color of black and white cells 
To differenctiate visited and unvisited cells I used red and blue colors
It contains some styling and transitions for Stats board 
stying for Reset Button

    -----------------------------------------------> Javascript <----------------------------------------------------------------

When Html file is completly Loaded We call a funtion to create ChessBoard

                                               CreateBoard()
It is used to create a Board of size 8*8
we create a div of classname cell and it's corresponding row and column which we can use later 
Adding a Event Listner to every Cell to identify clicks and appending to Chess Board

                                                AddKnight()
It is used to add a move a Knight accors the chess board
We give the class name "piece" to Knight 
Using getBoundingClientRect() we can get current location of knight in particular cell
Append Knight to cell and insert the cordinates to visited list

                                                 Clicked()
Taking the cordinates of Clicked Cell (row and column)

check if difference between Knight row and clicked row === 2 and difference between Knight column and clicked column===1 or vice versa (2,1) or (1,2) 
if yes then append the knight to this cell 
update the row and column of knight and add the cordinates to visted list

                                                UpdateStats()
It is used to update the stats ,it targets the div with Id of different stats like moves ,visited etc.. and update the stats

                                                 ResetGame()
Used to Reset The Board and stats
