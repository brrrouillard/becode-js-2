/* EXERCICE 01 */

let arr = [];
for (let i = 1; i <= 9; i++){
    arr.push(i);
}

let res = 0;

for(let i = 0; i < arr.length; i++){
    res += arr[i];
}

console.log(res);

/* EXERCICE 02 */

let arrActors = ["Leonardo DiCaprio", "Brad Pitt", "Elijah Wood"];

for (let i = 0; i < arrActors.length; i++){
    console.log(`Le numéro ${i+1} est ${arrActors[i]}.`);
}

/* EXERCICE 03 */

let arrMario = ['Mario' , 'Luigi', 'Peach'];
let arrCopy = [];

for(let i = 0; i < arrMario.length; i++){
    arrCopy.push(arrMario[i]);
}
arrCopy.push("Bowser");
console.log(arrCopy);