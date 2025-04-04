import { AgeType, AgeTypeInterface } from "../../Attributes/Age/Age";
import { Mammal } from "../Animal";
import { Family,FamilyInterface } from "../../LiveStyle/Family/Family";
import { IRun } from "../../Attributes/Run";
import { ITalk } from "../../Attributes/Talk";

export class Lion extends Mammal<Lion> implements FamilyInterface,AgeTypeInterface,IRun,ITalk{
    public ageType: AgeType;
    constructor(_age:number,name:string,public family:Family) {
        super(name);
        this._age=_age;
        if(_age<5){
            this.ageType=AgeType.Child;
        }
        else{
            this.ageType=AgeType.Adult;
        }
        this.family=family;
    }
    
   
    Talk():string{
        return `${this.name} is talking`;
    }
    Run():string{
        return `${this.name} is running`;
    } 

    GiveBirth(): Lion[] {
        let lions:Lion[]=super.GiveBirth(() => new Lion(0,"LionName", this.family));
        return lions;
    }

    LivingPlace(): string {
        return `I'm from ${this.family.name} family`;
    }
}


