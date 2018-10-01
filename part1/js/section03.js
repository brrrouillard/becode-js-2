
function soustract(firstNb, secondNb) {
    return firstNb - secondNb;
}

function divise(firstNb, secondNb) {
    return firstNb / secondNb;
}

function multiplicate(firstNb, secondNb) {
    return firstNb * secondNb;
}

function multiply(value, pourcentage) {
    return value * (pourcentage / 100);
}

function speed(distance, timeNeeded) {
    return "" + distance / timeNeeded + "km/h";
}


console.log(speed(100, 3));