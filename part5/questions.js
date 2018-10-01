/**
 * Exercice sur les chaines de caractères.
 * Trouvez la façon de faire la plus optimal.
 * Il peut y avoir plusieur façon de faire.
 */
var tailleString = function (texte) {
    return texte.length;
}
var remplaceECar = function (texte) {
    return texte.replace("e", " ");
}
var concatString = function (texte1, texte2) {
    return texte1 + texte2;
}
var afficherCar5 = function (texte) {
    return texte.charAt(6);
}
var afficher9Car = function (texte) {
    return texte.slice(0, 9);
}
var majusculeString = function (texte) {
    return texte.toUpperCase();
}
var minusculeString = function (texte) {
    return texte.toLowerCase();
}
var SupprEspaceString = function (texte) {
    return texte.trim();
}
var IsString = function (texte) {
    return typeof(texte) == "string";
}

var AfficherExtensionString = function (texte) {
    let dotPosition = texte.indexOf(".");
    return texte.slice(dotPosition+1);
    
}
var NombreEspaceString = function (texte) {
    return texte.split(" ").length - 1;

}
var InverseString = function (texte) {
    let arr = [];
    for (let i = 0; i <= texte.length; i++){
        arr[i] = texte[texte.length-i];
    }
    return arr.join('');
}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
var calculPuissance = function (x, y) {
    return x ** y;
}
var valeurAbsolue = function (nombre) {
    return Math.abs(nombre);
}
var valeurAbsolueArray = function (array) {
    let newArr = []
    for (let i = 0; i < array.length; i++){
        newArr.push(Math.abs(array[i]));
    }
    return newArr;
}
var sufaceCercle = function (rayon) {
    return Math.round(rayon*rayon*Math.PI);
}
var hypothenuse = function (ab, ac) {
    return (ab*ab+ac*ac)**0.5;
}
var calculIMC = function (poids, taille) {
    return parseFloat((poids/(taille*taille)).toPrecision(4));
}
