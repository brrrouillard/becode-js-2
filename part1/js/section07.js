let min = Math.min(7, 5, -12, 6, 32, 18, 14, -2);
let max = Math.max(-3, 9, 21, 36, 27, 54, 17, 35);
let both = min + max;


// Exercice 1
let floatBateau = 10.4;
let couleBateau = Math.floor(floatBateau);
let voleBateau = Math.ceil(floatBateau);

// Exercice 2

let random = Math.floor(Math.random() * (100 - 50 + 1) + 50);
let randomm = (Math.random() >= 0.5) ? 1 : 0;
let randommm = Math.floor(Math.random() * (10 - 0 + 1));

// Exercice 3

let tab = ['Goro', 'Johnny Cago', 'Kano', 'Liu Kano', 'Raiden', 'Reptil', 'Scorpion', 'Shang Tsun', 'Sonya', 'Sub-Zero'];
let choice = tab[Math.floor(Math.random() * (tab.length - 0))];
console.log(choice);