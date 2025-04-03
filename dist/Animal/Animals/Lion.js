"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lion = void 0;
const Age_1 = require("../../Attributes/Age/Age");
const Animal_1 = require("../Animal");
class Lion extends Animal_1.Mammal {
    constructor(_age, name, family) {
        super(name);
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
    Talk() {
        return `${this.name} is talking`;
    }
    Run() {
        return `${this.name} is running`;
    }
    GiveBirth() {
        let lions = super.GiveBirth(() => new Lion(0, "LionName", this.family));
        return lions;
    }
    LivingPlace() {
        return `I'm from ${this.family.name} family`;
    }
}
exports.Lion = Lion;
