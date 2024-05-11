// for the next part of the code
    // the code should print each element in the list row_full in each div with their id = row<index>
    // one more div should show the number of attempts
for (let i = 0; i < row_full.length; i++) {
    const rowElement = document.getElementById(`row${i + 1}`);  // Construct id dynamically
    rowElement.textContent = row_full[i];
}
    
document.getElementById('attempts').textContent = `${attempts}/6`;


/*
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("generateButton").addEventListener("click", photo_generator);
})


function Function_Name() { 
    window.alert('click')
}
*/
