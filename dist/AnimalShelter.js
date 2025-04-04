"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Lion_1 = require("./Animal/Animals/Lion");
const Snake_1 = require("./Animal/Animals/Snake");
const Tortoise_1 = require("./Animal/Animals/Tortoise");
const Squirrel_1 = require("./Animal/Animals/Squirrel");
const Crocodile_1 = require("./Animal/Animals/Crocodile");
const Home_1 = require("./LiveStyle/Home/Home");
const Color_1 = require("./Attributes/Color/Color");
class AnimalShetler {
    constructor(maxCountMammals, maxCountReptiles) {
        this.maxCountMammals = maxCountMammals;
        this.maxCountReptiles = maxCountReptiles;
        this.currentMammals = 0;
        this.currentReptiles = 0;
        this._reptileFamilies = [];
        this._mammalFamilies = [];
        this.mamals = [];
        this.reptiles = [];
    }
    addMamalFamily(family) {
        if (this.maxCountMammals < this.currentMammals + family.maxSize)
            throw new Error("Not enough space for this Mamal family");
        this._mammalFamilies.push(family);
        this.currentMammals += family.maxSize;
    }
    addReptileFamily(family) {
        if (this.maxCountReptiles < this.currentReptiles + family.maxSize)
            throw new Error("Not enough space for this Reptile family");
        this._reptileFamilies.push(family);
        this.currentReptiles += family.maxSize;
    }
    addMamal(mamal) {
        if (this.currentMammals >= this.maxCountMammals) {
            throw new Error("Mamal cannot be added");
        }
        this.currentMammals++;
        this._mammalFamilies.push();
    }
    addReptile(Reptile) {
        if (this.currentReptiles >= this.maxCountReptiles) {
            throw new Error("Reptile cannot be added");
        }
        this.currentReptiles++;
        this._reptileFamilies.push();
    }
}
let familyRedString = { name: "red string", maxSize: 9 };
let lion = new Lion_1.Lion(10, "LionNameOriginal", familyRedString);
let lions = lion.GiveBirth();
console.log(lions[0]);
console.log(lion);
console.log(lions[0].LivingPlace());
console.log(lions.length);
console.log(lion.Run());
let squirrel = new Squirrel_1.Squirrel(10, "sqr ORIGINAL", { treetype: Home_1.TreeType.Cedar, nutCapacity: 9 });
let squirrels = squirrel.GiveBirth();
console.log(squirrels[0]);
console.log(squirrel);
console.log(squirrels[0].LivingPlace());
console.log(squirrels.length);
console.log(squirrel.Jump());
let redNeck = { name: "red Neck", maxSize: 10 };
let crocodile = new Crocodile_1.Crocodile(8, 3.50, redNeck);
let crocodiles = crocodile.GiveBirth();
console.log(crocodiles[0]);
console.log(crocodile);
console.log(crocodiles[0].LivingPlace());
console.log(crocodiles.length);
console.log(crocodile.Swim());
let tortoise = new Tortoise_1.Tortoise(40, "TortoiseNameOrg");
let tortoises = tortoise.GiveBirth();
console.log(tortoises[0]);
console.log(tortoise);
console.log(tortoises[0].LivingPlace());
console.log(tortoises.length);
console.log(tortoise.Swim());
let snake = new Snake_1.Snake(15, "SnakeNameOrg", 5.00, Color_1.Color.green);
let snakes = snake.GiveBirth();
console.log(snakes[0]);
console.log(snake);
console.log(snakes[0].LivingPlace());
console.log(snakes.length);
console.log(snake.Walk());
let animalShetler = new AnimalShetler(10, 11);
console.log(animalShetler.currentReptiles);
console.log(animalShetler.maxCountReptiles);
console.log(redNeck.maxSize);
animalShetler.addReptileFamily(redNeck);
try {
    animalShetler.addReptile(crocodile);
}
catch (_a) {
    console.log("ERROR!");
}
animalShetler.addMamalFamily(familyRedString);
console.log(animalShetler.currentMammals);
animalShetler.addMamal(squirrel);
try {
    animalShetler.addMamal(lion);
}
catch (_b) {
    console.log("ERROR!");
}
