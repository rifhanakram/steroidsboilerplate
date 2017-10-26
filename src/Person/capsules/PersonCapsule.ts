import { Steroid } from "steroidslibrary/Steroids"
import { Flask } from "steroidslibrary/Flask"
import * as People from "../../people";

export interface IPersonCapsule {
    getPeople(steroid:Steroid);
}

export class PersonCapsule extends Flask implements IPersonCapsule {
    
   public getPeople(steroid: Steroid) {
        return People;
   }
}