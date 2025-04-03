"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Squirrel = void 0;
const Animal_1 = require("../Animal");
class Squirrel extends Animal_1.Mammal {
    constructor(_age, name, tree) {
        super(name);
        this._age = _age;
        this.tree = tree;
        this.currentNutsInHouse = 0;
    }
    StoreNut() {
        if (this.tree.nutCapacity < this.currentNutsInHouse)
            throw new Error("Not enough space in tree");
        this.currentNutsInHouse++;
    }
    GiveBirth() {
        let squirrels = super.GiveBirth(() => new Squirrel(0, "squrrielName", this.tree));
        return squirrels;
    }
    LivingPlace() {
        return `I'm from ${this.tree.treetype} tree`;
    }
}
exports.Squirrel = Squirrel;
