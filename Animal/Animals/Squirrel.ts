import { AgeType, AgeTypeInterface } from "../../Attributes/Age/Age";
import { Mammal } from "../Animal";
import { TreeHome, TreeType,Tree } from "../../LiveStyle/Home/Home";
export class Squirrel extends Mammal<Squirrel> implements TreeHome{
    public tree: Tree;
    public currentNutsInHouse:number;
    constructor(_age:number,name:string, tree:Tree) {
        super(name);
        this._age=_age;
        this.tree=tree;
        this.currentNutsInHouse=0;
    }
    StoreNut():void|never{
    if(this.tree.nutCapacity<this.currentNutsInHouse)
        throw new Error("Not enough space in tree");
    this.currentNutsInHouse++;
    }
    
    
    GiveBirth(): Squirrel[] {
        let squirrels:Squirrel[]=super.GiveBirth(() => new Squirrel(0,"squrrielName", this.tree));
        return squirrels;
    }

    LivingPlace(): string {
        return `I'm from ${this.tree.treetype} tree`;
    }
}

