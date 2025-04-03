"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Crocodile = void 0;
const Age_1 = require("../../Attributes/Age/Age");
const Animal_1 = require("../Animal");
class Crocodile extends Animal_1.Reptile {
    constructor(_age, length, family) {
        super("Crocodile");
        this.length = length;
        this.family = family;
        this._age = _age;
        if (_age < 5) {
            this.ageType = Age_1.AgeType.Child;
        }
        else {
            this.ageType = Age_1.AgeType.Adult;
        }
        this.family = family;
    }
    Walk() {
        return `Crocodile is walking`;
    }
    Swim() {
        return `Crocodile is swimming`;
    }
    GiveBirth() {
        let lions = super.GiveBirth(() => new Crocodile(0, 3.00, this.family));
        return lions;
    }
    LivingPlace() {
        return `I'm from ${this.family.name} family`;
    }
}
exports.Crocodile = Crocodile;
