"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tortoise = void 0;
const Age_1 = require("../../Attributes/Age/Age");
const Animal_1 = require("../Animal");
class Tortoise extends Animal_1.Reptile {
    constructor(_age, name) {
        super("Lion");
        this._age = _age;
        if (_age < 30) {
            this.ageType = Age_1.AgeType.Child;
        }
        else {
            this.ageType = Age_1.AgeType.Adult;
        }
    }
    GiveBirth() {
        let lions = super.GiveBirth(() => new Tortoise(0, "turtleName"));
        return lions;
    }
    LivingPlace() {
        return `I don't have family`;
    }
}
exports.Tortoise = Tortoise;
