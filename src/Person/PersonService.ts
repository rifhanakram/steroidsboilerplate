import {AbstractService} from "steroidslibrary/AbstractService"
import {Steroid} from "steroidslibrary/Steroids"
import { IPersonCapsule } from "./capsules/PersonCapsule";

export class PersonService extends AbstractService {
    IPersonCapsule: IPersonCapsule;
    protected async onHandle(steroid: Steroid) {

        return this.IPersonCapsule.getPeople(steroid);
    }
}