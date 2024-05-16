
const button = document.createElement("button");

// Set button attributes and styles
button.textContent = "Generate Photo";
button.style.color = "white";
button.style.backgroundColor = "rgb(83, 141, 78)";
button.style.padding = "10px";
button.style.borderRadius = "50px";
button.style.border = "none";
button.style.margin = "8px";

// Find the appropriate location to insert the button on the webpage and append it
const heading = document.querySelector("body > div:nth-child(2) > div > div.App-module_gameContainer__K_CBh > header");
if (heading) {
  heading.appendChild(button);
}



