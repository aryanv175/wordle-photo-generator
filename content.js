console.log('hello');

window.onload = () => {
    console.log('website loaded');

    var check = function(){
        const b2 = document.querySelector("body > div:nth-child(2) > div > div > div > div > div.Welcome-module_buttonContainer__K4GEw > button:nth-child(3)");
        if (b2) {
            // Click the play button
            b2.click();
            console.log('clicked play');
            // Once the play button is clicked, check for the X button
            checkXButton() // Wait for a second before checking for X button
        } else {
            // If the play button is not found, wait and check again
            setTimeout(check, 1000); // Check again in a second
        }
    }

    var checkXButton = function(){
        const xbutton = document.querySelector("#help-dialog > div > div > button");
        if (xbutton) {
            // Click the X button
            xbutton.click();
            console.log('Clicked X button');
            // Perform your action here after the button is clicked
            addButton();
        } else {
            // If the X button is not found, wait and check again
            setTimeout(checkXButton, 1000); // Check again in a second
        }
    }

    // Start checking for the play button
    check();

    console.log('reached end');


}

function addButton (){
    console.log('about to add the button');

    // Create a button dynamically
    const button = document.createElement("button");
    button.textContent = "Generate Photo";
    button.style.color = "white";
    button.style.backgroundColor = "rgb(83, 141, 78)";
    button.style.padding = "10px";
    button.style.borderRadius = "50px";
    button.style.border = "none";
    button.style.margin = "8px";
    button.style.fontFamily = "Arial";
    button.style.fontWeight = "bold";

    // Append the button to the header once the page is loaded
    const heading = document.querySelector("body > div:nth-child(2) > div > div.App-module_gameContainer__K_CBh > header");
    if (heading) {
        heading.appendChild(button);
        console.log('Button added');
    }

    console.log('reached end of button function');

    button.addEventListener('click', photo_generator);
    
}

function photo_generator(){
    console.log('in script')
    // core js logic for the functioning of the extension

    // this the attempts variable we will use for the number of attempts 
    // x/6. min value can be 1, that is in case if someone does it in their
    // first try etc.
    var attempts = 1;
    var isEmpty = false;

    var row_full = []

    // game board that contains all the rows:
    const board = document.querySelector("#wordle-app-game > div.Board-module_boardContainer__TBHNL > div");
    window.alert(board)
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

            tile.innerHTML = '';

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

        if (isEmpty){
            break
        }

        row_full.push(row_image)
    }

    /* this is commented because this was solved by putting the push statement after the 
    isEmpty check above^
    
    why pop? because for some reason there is an empty element at the end of the list
    if (row_full[-1]== ''){
        row_full.pop()
    }

    */

    console.log(row_full)
    // this will be the number of attempts taken to complete the wordle. this can be displayed in the end to show the number of attempts taken to complete the wordle.
    attempts = i;

    return row_full, attempts;
}

// connecting this funtion, also need to make it work with the other button