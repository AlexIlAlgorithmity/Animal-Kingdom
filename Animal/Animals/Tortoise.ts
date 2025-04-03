import { AgeType, AgeTypeInterface } from "../../Attributes/Age/Age";
import { Reptile } from "../Animal";

export class Tortoise extends Reptile<Tortoise> implements AgeTypeInterface{
    public ageType: AgeType;
    constructor(_age:number,name:string) {
        super("Lion");
        this._age=_age;
        if(_age<30){
            this.ageType=AgeType.Child;
        }
        else{
            this.ageType=AgeType.Adult;
        }
    }
    
    GiveBirth(): Tortoise[] {
        let lions:Tortoise[]=super.GiveBirth(() => new Tortoise(0,"turtleName"));
        return lions;
    }

    LivingPlace(): string {
        return `I don't have family`;
    }
}