# wordle-photo-generator


This extension aims to make shareable photo for your wordle results. No longer do you have to place each emoji everyday, simply click the extension and get the shareable photo generated. 

16/5/24 Debug Notes:

Gonna try a new strategy, instead to using the button on the extension, I will insert a button on the page and generate the picture when the user clicks that instead.

I would want to present the picture on a popup ideally.

11/5/24 Debug Notes :
Problem I am facing: I am using document.queryselector in two different contexts.
in one part where I am getting board, rows, I am trying to get the code of the wordle page
but when I do the document.getElementById("generateButton").addEventListener("click", photo_generator); to check when the button is pressed, I am using the code of the extension.

I dont know how to fix this atm lol

so far the idea is to separate the file where I am trying to use the different contexts.
So in the photo-generator.js file I want to use the code of the wordle website.
and in the photo-display I want to use the code of the extension.



9/5/24 Personal notes for development:\ 
Color: \
Yellow: #b59f3b emoji: 🟨\
Green: #538d4e emoji: 🟩\
Black: #3a3a3c emoji: ⬛\


Rows and their classes:\
<img width="429" alt="image" src="https://github.com/aryanv175/wordle-photo-generator/assets/91381804/9f8bd542-44e9-4109-ba4e-2d0efef3dbc4">


how to know if a tile is empty? \
// tile is empty
tile.dataset.state == 'empty'
// not empty
tile.dataset.state == 'correct'


How to find background color? \

const computedStyles = window.getComputedStyle(tile);

// Get the background color property from the computed styles
const backgroundColor = computedStyles.backgroundColor;

// Log the background color to the console
console.log('Background color:', backgroundColor);

grey rgb(58, 58, 60)
yellow rgb(181, 159, 59)
green rgb(83, 141, 78)

What to do for the basic mvp?

1. identify all the rows and the tiles using a loop
2. check if the row is empy using the dataset
    1. if it is empty end the loop and no need to pint anything.
    2. else: print the appropriate square based on the background color of the current tile.
3. display the x/6

features that should be added afterwards
1. the date and the 'wordle #xxxx' should be displayed
2. a remminder to complete the wordle for that day
3. a button that takes them to wordle website so they can access it conveniently 