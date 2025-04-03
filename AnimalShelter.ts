import { Family } from "./LiveStyle/Family/Family";
import { Lion } from "./Animal/Animals/Lion";
import { Snake } from "./Animal/Animals/Snake";
import { Tortoise } from "./Animal/Animals/Tortoise";
import { Squirrel } from "./Animal/Animals/Squirrel";
import { Crocodile } from "./Animal/Animals/Crocodile";
import { TreeType ,Tree} from "./LiveStyle/Home/Home";
import { Color } from "./Attributes/Color/Color";
import { Mammal, Reptile } from "./Animal/Animal";
class AnimalShetler{
    public currentMammals:number;
    public currentReptiles:number;
    public mamals:Mammal<any>[];
    public reptiles:Reptile<any>[];
    constructor(public maxCountMammals:number,public maxCountReptiles:number){
        this.currentMammals=0;
        this.currentReptiles=0;
        this._reptileFamilies=[];
        this._mammalFamilies=[];
        this.mamals=[];
        this.reptiles=[];
    }
    private _reptileFamilies:Family[];
    private _mammalFamilies:Family[];
    addMamalFamily(family:Family):void{
        if(this.maxCountMammals<this.currentMammals+family.maxSize)
            throw new Error("Not enough space for this Mamal family");
        this._mammalFamilies.push(family);
        this.currentMammals+=family.maxSize;
    }
    addReptileFamily(family:Family):void{
        if(this.maxCountReptiles<this.currentReptiles+family.maxSize)
            throw new Error("Not enough space for this Reptile family");
        this._reptileFamilies.push(family);
        this.currentReptiles+=family.maxSize;
    }
    addMamal<T extends Mammal<T>>(mamal:T):void{
       if(this.currentMammals>=this.maxCountMammals){
            throw new Error("Mamal cannot be added");
       }
       this.currentMammals++;
       this._mammalFamilies.push();
    }
    addReptile<T extends Reptile<T>>(Reptile:T):void{
        if(this.currentReptiles>=this.maxCountReptiles){
             throw new Error("Reptile cannot be added");
        } 
       this.currentReptiles++;
       this._reptileFamilies.push();

     }
}
let familyRedString:Family={name:"red string", maxSize:9};
let lion:Lion = new Lion(10,"LionNameOriginal",familyRedString);
let lions:Lion[]=lion.GiveBirth();
console.log(lions[0]);
console.log(lion);

console.log(lions[0].LivingPlace());
console.log(lions.length);

console.log(lion.Run());


let squirrel:Squirrel = new Squirrel(10,"sqr ORIGINAL" ,{treetype:TreeType.Cedar, nutCapacity:9});
let squirrels:Squirrel[]=squirrel.GiveBirth();
console.log(squirrels[0]);
console.log(squirrel);
console.log(squirrels[0].LivingPlace());
console.log(squirrels.length);
console.log(squirrel.Jump());


let redNeck:Family={name:"red Neck", maxSize:10};
let crocodile:Crocodile = new Crocodile(8,3.50,redNeck);
let crocodiles:Crocodile[]=crocodile.GiveBirth();
console.log(crocodiles[0]);
console.log(crocodile);
console.log(crocodiles[0].LivingPlace());
console.log(crocodiles.length);

console.log(crocodile.Swim());

let tortoise:Tortoise = new Tortoise(40,"TortoiseNameOrg");
let tortoises:Tortoise[]=tortoise.GiveBirth();
console.log(tortoises[0]);
console.log(tortoise);
console.log(tortoises[0].LivingPlace());
console.log(tortoises.length);

console.log(tortoise.Swim());

let snake:Snake = new Snake(15,"SnakeNameOrg",5.00,Color.green);
let snakes:Snake[]=snake.GiveBirth();
console.log(snakes[0]);
console.log(snake);
console.log(snakes[0].LivingPlace());
console.log(snakes.length);
console.log(snake.Walk());

let animalShetler:AnimalShetler= new AnimalShetler(10,11);

animalShetler.addReptileFamily(redNeck);
try{
animalShetler.addReptile<Crocodile>(crocodile)
}
catch{
    console.log("ERROR!");
}

animalShetler.addMamalFamily(familyRedString);
console.log(animalShetler.currentMammals);
animalShetler.addMamal<Squirrel>(squirrel);
try{
animalShetler.addMamal<Lion>(lion)
}
catch{
    console.log("ERROR!");
}
