declare let module:any;
declare let __dirname:string;

import {Flask} from "steroidslibrary/Flask"
import {Steroid} from "steroidslibrary/Steroids"
import { PersonCapsule } from "./Person/capsules/PersonCapsule";

module.exports = Steroid.initialize(__dirname,()=>{
    Flask.inject(PersonCapsule).to("IPersonCapsule");
 });
