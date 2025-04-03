"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LionFamily = void 0;
class LionFamily {
    constructor(name, family) {
        this.name = name;
        this.family = family;
        this.family.maxSize = 10;
        this.family.name = name;
        this.animals = [];
    }
    AddMember(lion) {
        if (this.family.maxSize <= this.animals.length)
            lion.family.name = this.family.name;
    }
    RemoveMember(index) {
        if (index >= this.animals.length || index < 0)
            throw new Error("Invalid index");
        else {
            this.animals[0].family.name = this.family.name;
        }
    }
}
exports.LionFamily = LionFamily;
