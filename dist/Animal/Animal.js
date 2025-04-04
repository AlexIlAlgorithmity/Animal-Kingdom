"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reptile = exports.Mammal = exports.Animal = void 0;
const Gender_1 = require("../Attributes/Gender/Gender");
class Animal {
    constructor(animalType) {
        this.animalType = animalType;
        this._age = 0;
        this.gender = Math.random() < 0.5 ? Gender_1.Gender.Male : Gender_1.Gender.Female;
    }
    set age(newAge) {
        this._age = newAge;
    }
    get age() {
        return this._age;
    }
}
exports.Animal = Animal;
class Mammal extends Animal {
    constructor(name) {
        super("Mammal");
        this.name = name;
    }
    GiveBirth(createInstance) {
        const numberOfBabies = 5;
        const babies = [];
        for (let i = 0; i < numberOfBabies; i++) {
            babies.push(createInstance());
        }
        console.log(`${this.name} gives birth`);
        return babies;
    }
    Walk() {
        return `${this.name} is walking`;
    }
    Jump() {
        return `${this.name} is jumping`;
    }
}
exports.Mammal = Mammal;
class Reptile extends Animal {
    constructor(name) {
        super("Reptile");
        this.name = name;
    }
    GiveBirth(createInstance) {
        const numberOfBabies = 8;
        const babies = [];
        for (let i = 0; i < numberOfBabies; i++) {
            babies.push(createInstance());
        }
        console.log(`${this.name} lays eggs`);
        return babies;
    }
    Walk() {
        return `${this.name} is walking`;
    }
    Swim() {
        return `${this.name} is swimming`;
    }
}
exports.Reptile = Reptile;
