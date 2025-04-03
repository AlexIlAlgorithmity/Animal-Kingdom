import { Family } from "./Family/Family"
import { PlaceResidence } from "./Home/Home"
export interface PlaceOfResidence {
    inhabitance: Family | PlaceResidence;
}