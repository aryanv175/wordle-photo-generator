// core js logic for the functioning of the extension

// this the attempts variable we will use for the number of attempts 
// x/6. min value can be 1, that is in case if someone does it in their
// first try etc.
var attempts = 1;
var isEmpty = false;

var row_full = []

// game board that contains all the rows:
const board = document.querySelector("#wordle-app-game > div.Board-module_boardContainer__TBHNL > div");
// board.children.length = 6 always. because there are always 6 rows
for(var i = 0; i<6; i++){
    // now we are in the current row
    var row_image = ''
    var row = board.children[i];
    for (var j = 0; j<5; j++){
        var tile = row.children[j].firstChild

        // check if tile is empty, if it is then stop the code
        if (tile.dataset.state == 'empty'){
            isEmpty = true;
            break
        }

        const computedStyles = window.getComputedStyle(tile);
        // Get the background color property from the computed styles
        const backgroundColor = computedStyles.backgroundColor;
        if (backgroundColor == 'rgb(83, 141, 78)'){
            row_image += '🟩';
        } else if (backgroundColor == 'rgb(181, 159, 59)'){
            row_image += '🟨';
        } else {
            row_image += '⬛';
        }
    }

    row_full.push(row_image)

    if (isEmpty){
        break
    }
}

row_full.pop()
console.log(row_full)
attempts = i;
