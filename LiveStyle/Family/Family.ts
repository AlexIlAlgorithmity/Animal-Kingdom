import { Lion } from "../../Animal/Animals/Lion";
import { Animal } from "../../Animal/Animal";
export type Family={
    name:string;
    maxSize:number;
}
export interface FamilyInterface{
    family:Family;
}
export class LionFamily implements FamilyInterface{
    public animals:Lion[];
    constructor(public name:string,public family:Family){
        this.family.maxSize=10;
        this.family.name=name;
        this.animals=[];
    }
    AddMember(lion:Lion):never| void{
        if(this.family.maxSize<=this.animals.length)
        lion.family.name=this.family.name;
    }
    RemoveMember(index:number):never|void{
        if(index>=this.animals.length||index<0)
            throw new Error("Invalid index");
        else{
            this.animals[0].family.name=this.family.name;
        }
    }
   
}