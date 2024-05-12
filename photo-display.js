// for this file
// the code should print each element in the list row_full in each div with their id = row<index>
// one more div should show the number of attempts

import {photo_generator} from "photo_generator.js";

var photo = [];
var attempts = 1;

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("generateButton").addEventListener("click", photo_generator);
})

for (let i = 0; i < photo.length; i++) {
    var rowElement = document.getElementById(`row${i + 1}`);  // Construct id dynamically
    rowElement.textContent = photo[i];
}
    
document.getElementById('attempts').textContent = `${attempts}/6`;





/*
function Function_Name() { 
    window.alert('click')
}
*/
