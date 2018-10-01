var CreationTableauLangages = function () {
    let arr = ['Html', 'CSS', 'Java', 'PHP'];
    return arr;
}

var CreationTableauNombres = function () {
    let arr = [0, 1, 2, 3, 4, 5];
    return arr;
}

var RemplacementElement = function (langages) {
    langages[2] = "Javascript";
    return langages;
}

var AjoutElementLangages = function (langages) {
    langages.push("Ruby", "Python");
    return langages;
}

var AjoutElementNombres = function (nombres) {
    nombres.unshift(-2, -1);
    return nombres;
}

var SuppressionPremierElement = function (langages) {
    langages.shift();
    return langages;
}

var SuppressionDernierElement = function (langages) {
    langages.pop();
    return langages;
}

var ConversionChaineTableau = function (reseaux_sociaux_chaine) {
    let arr = reseaux_sociaux_chaine.split(",");
    return arr;
}

var ConversionTableauChaine = function (langages) {
    let str = langages.join();
    return str;
}

var TriTableau = function (reseaux_sociaux) {
    return reseaux_sociaux.sort();
}

var InversionTableau = function (reseaux_sociaux){
    let arr = [];
    for (let i = 0; i < reseaux_sociaux.length; i++){
        arr[i] = reseaux_sociaux[reseaux_sociaux.length-i-1];
    }
    return arr;

}
