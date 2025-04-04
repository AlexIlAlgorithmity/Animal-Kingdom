import { Lion } from "../../Animal/Animals/Lion";
import { Animal } from "../../Animal/Animal";
export type Family={
    name:string;
    maxSize:number;
}
export interface FamilyInterface{
    family:Family;
}
