import { Property } from "./property";
import { ARMOR } from "../constants";


export class Defense extends Property {
    constructor(_armor: number = 0) {
        super(ARMOR, _armor);
    }
    output(): string {
        if (this.value === 0) {
            return '    i not have ' + this.label;
        } else {
            return '    i have ' + this.label + ' with amout: ' + this.value;
        }
    }
}