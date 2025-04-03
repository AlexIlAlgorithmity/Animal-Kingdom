export enum TreeType{
    Poplar = "Poplar",
    Cedar  = "Cedar",
    Oak    = "Oak",
    Maple  = "Maple",
}
export enum SnakeHole{
    hole= "hole",
}
export type Tree={
    treetype:TreeType;
    nutCapacity:number;
}

export interface TreeHome{
    tree:Tree;
}

export type PlaceResidence = TreeHome | SnakeHole;
