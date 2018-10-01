// EXERCICE 1

let character = {
    name: "Matthieu",
    age: 22,
    items_to_give: ["T-Shirt", "Jean"],
};

for (elem in character){
    console.log(character[elem]);
}

// EXERCICE 2

let epee = {
    title: "Epée",
    physic: 10,
    magic: 1,
    minLevel: 1,
    available: true
};

let hache = {
    title: "Hache",
    physic: 8,
    magic: 2,
    minLevel: 3,
    available: true
};

let baton = {
    title: "Baton",
    physic: 2,
    magic: 8,
    minLevel: 5,
    available: false
};

let arr = [epee, hache, baton];

// Affiche tous les objets

for (let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

// Affiche tous les objets disponibles

for (let i = 0; i < arr.length; i++){
    if (arr[i].available){
        console.log(arr[i]);
    }
}

// Affiche tous les objets niveau < 10

for (let i = 0; i < arr.length; i++){
    if (arr[i].minLevel > 10){
        console.log(arr[i]);
    }
}

// EXERCICE 3

let mainCharacter = {
    name: "Matthieu",
    level: 120,
    life: 100,
    weapon: {
        name: "Hache",
        damage: 10
    },
    attack: function(){
        console.log(`${this.name} attaque avec l'arme ${this.weapon.name} les dégats sont ${this.weapon.damage*this.level}`)
    }
};

mainCharacter.attack();


// EXERCICE BONUS 4

let adversaire = {
    name: "JS",
    level: 42,
    life: 50,
    weapon: {
        name: "Deuillegivre",
        damage: 50
    },
    attack: function(){

    },
    receiveDamage: function(){

    },


};