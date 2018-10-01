/* EXERCICE 01 */

for (let i = 0; i <= 20; i++){
    if (i % 2 == 0){
        console.log(`${i} est pair.`);
    }
    else {
        console.log(`${i} est impair.`);
    }
}

/* EXERCICE 02 */

for (let i = 0; i <= 10; i++){
    let result = i * 9;
    console.log(`${i} * 9 = ${result}`);
}

/* EXERCICE 03 */

function checkGrade(score){
    message = "Pour " + score + " vous avez le score ";
    if (score > 90){
        message += "A";
    }
    else if (score > 80){
        message += "B";
    }
    else if (score > 70){
        message += "C";
    }
    else if (score > 65){
        message += "D";
    }
    else {
        message += "F";
    }
    return message;
}

for (let i = 0; i <= 100; i++){
    console.log(checkGrade(i));
}

/* EXERCICE 04 */

for (let i = 1; i <= 5; i++){
    let row = "";   
    for (let j = 1; j <= i; j++){
        row += "* ";
    }   
    console.log(row);
}