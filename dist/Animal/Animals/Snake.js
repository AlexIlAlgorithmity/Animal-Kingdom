"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Snake = void 0;
const Animal_1 = require("../Animal");
const Home_1 = require("../../LiveStyle/Home/Home");
class Snake extends Animal_1.Reptile {
    constructor(_age, name, length, color) {
        super("snakeName");
        this.color = color;
        this.home = Home_1.SnakeHole.hole;
        this._age = _age;
    }
    Walk() {
        return `${this.name} is sliding`;
    }
    GiveBirth() {
        let lions = super.GiveBirth(() => new Snake(0, "snakeName", 3.00, this.color));
        return lions;
    }
    LivingPlace() {
        return `I'm from ${this.home}`;
    }
}
exports.Snake = Snake;
