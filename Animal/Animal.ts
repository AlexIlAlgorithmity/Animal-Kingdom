
import { AgeInterface } from "../Attributes/Age/Age";
import { Gender } from "../Attributes/Gender/Gender";
import { GenderInterface } from "../Attributes/Gender/Gender";
import { Lion } from "./Animals/Lion";

type AnimalType= "Mammal" | "Reptile";

export abstract class Animal<T extends Animal<T>> implements AgeInterface,GenderInterface {
    protected _age: number = 0;
    public gender: Gender;
    protected constructor(protected animalType:AnimalType) {
        this.gender = Math.random() < 0.5 ? Gender.Male :Gender.Female;
    }
    abstract GiveBirth(createInstance: () => T): T[];
    abstract LivingPlace(): string;

    public set age(newAge: number) {
        this._age = newAge;
    }

    public get age(): number {
        return this._age;
    }
}

export abstract class Mammal<T extends Animal<T>> extends Animal<T> {
    protected constructor(protected name: string) {
        super("Mammal");
    }

    GiveBirth(createInstance: () => T): T[] {
        const numberOfBabies:number = 5;
        const babies: T[] = [];

        for (let i = 0; i < numberOfBabies; i++) {
            babies.push(createInstance());
        }
        console.log(`${this.name} gives birth`);

        return babies;
    }
    Walk():string{
        return `${this.name} is walking`;
    }
    Jump():string{
        return `${this.name} is jumping`;
    }

    abstract LivingPlace(): string;
}


export abstract class Reptile<T extends Animal<T>> extends Animal<T> {
    constructor(protected name: string) {
        super("Reptile");
    }

    GiveBirth(createInstance: () => T): T[] {
        const numberOfBabies:number = 8;
        const babies: T[] = [];

        for (let i = 0; i < numberOfBabies; i++) {
            babies.push(createInstance());
        }
        console.log(`${this.name} lays eggs`);

        return babies;
    }
    Walk():string{
        return `${this.name} is walking`;
    }
    Swim():string{
        return `${this.name} is swimming`;
    }
    

    abstract LivingPlace(): string;
}


