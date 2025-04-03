import { AgeType} from "../../Attributes/Age/Age";
import { Reptile } from "../Animal";
import { Family,FamilyInterface } from "../../LiveStyle/Family/Family";
export class Crocodile extends Reptile<Crocodile> implements FamilyInterface{
    public ageType: AgeType;
    constructor(_age:number,public length:number,public family:Family) {
        super("Crocodile");
        this._age=_age;
        if(_age<5){
            this.ageType=AgeType.Child;
        }
        else{
            this.ageType=AgeType.Adult;
        }
        this.family=family;

    }
    Walk():string{
        return `Crocodile is walking`;
    }
    Swim():string{
        return `Crocodile is swimming`;
    }
    GiveBirth(): Crocodile[] {
        let lions:Crocodile[]=super.GiveBirth(() => new Crocodile(0,3.00,this.family));
        return lions;
    }

    LivingPlace(): string {
        return `I'm from ${this.family.name} family`;
    }
}


