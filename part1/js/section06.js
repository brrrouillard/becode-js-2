let keepPlaying = true;
let count = 0;
let failCount = 0;

let char = ['B','O','N','J','O','U','R'];
let foundLetter = ['','','','','','',''];

function guessLetter(input){
    let found = false;
    for(let i = 0; i < char.length; i++){
        if (char[i] == input){
            // Adds the letter at the right places in the new array
            foundLetter[i] = input;
            found = true;
        }
    }
    if (!found){
        failCount++;  
    } 
}

// Actual game loop
while (keepPlaying) {
    count++;
    let input = prompt("Please enter a letter");
    guessLetter(input);
    console.log(foundLetter);
    if (JSON.stringify(char) === JSON.stringify(foundLetter)){
        keepPlaying = false;
        alert(`Bravo, vous avez gagné en ${count} coups ! \n
        Nombre de tentatives ratées : ${failCount}`)
    }
}