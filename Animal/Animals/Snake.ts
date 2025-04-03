import { Reptile } from "../Animal";
import { Color } from "../../Attributes/Color/Color";
import { TreeHome,PlaceResidence, SnakeHole } from "../../LiveStyle/Home/Home";

export class Snake extends Reptile<Snake>{
    home:PlaceResidence = SnakeHole.hole;
    constructor(_age:number,name:string,length:number,public color:Color) {
        super("snakeName");
        this._age=_age;
    
    }
    Walk():string{
        return `${this.name} is sliding`;
    }
    
    GiveBirth(): Snake[] {
        let lions:Snake[]=super.GiveBirth(() => new Snake(0,"snakeName",3.00,this.color));
        return lions;
    }

    LivingPlace(): string {
        return `I'm from ${this.home}`;
    }
}