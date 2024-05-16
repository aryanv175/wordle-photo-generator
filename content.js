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
            setTimeout(checkXButton, 1000); // Wait for a second before checking for X button
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
        } else {
            // If the X button is not found, wait and check again
            setTimeout(checkXButton, 1000); // Check again in a second
        }
    }

    // Start checking for the play button
    check();

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

    // Append the button to the header once the page is loaded
    const heading = document.querySelector("body > div:nth-child(2) > div > div.App-module_gameContainer__K_CBh > header");
    if (heading) {
        heading.appendChild(button);
        console.log('Button added');
    }
}