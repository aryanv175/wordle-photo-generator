# wordle-photo-generator


This extension aims to make shareable photo for your wordle results. No longer do you have to place each emoji everyday, simply click the extension and get the shareable photo generated. 

Personal notes for development:\
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