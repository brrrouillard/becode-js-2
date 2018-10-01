/* EXERCICE 1 */

let language = "fr";
let messageFr = "Bonjour tout le monde";
let messageEn = "Hello world";
let messageEs =  "Hola, Mundo";

if (language == "fr"){
    console.log(messageFr);
}
else if (language == "en"){
    console.log(messageEn);
}
else if (language == "es"){
    console.log(messageEs);
}
else {
    console.log("Langue incorrecte");
}

/* EXERCICE 2 */

let score = 40;
let rank;

if (score >= 90){
    rank = "A";
}
else if (score >= 50){
    rank = "B";
}
else {
    rank = "C";
}
console.log(rank);


/* EXERCICE 3 */

let word = "main";
let x = 3;
let result;
if (x > 1){
    result = word + "s";
}
else {
    result = word;
}
console.log(`Je possède ${x} ${result}.`);