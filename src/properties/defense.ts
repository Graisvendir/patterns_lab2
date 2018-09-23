import { Property } from "./property";


export class Defense extends Property {
    constructor(_label: string, _armor: number = 0) {
        super(_label, _armor);
    }
    output(): string {
        if (this.value === 0) {
            return '    i not have ' + this.label;
        } else {
            return '    i have ' + this.label + ' with amout: ' + this.value;
        }
    }
}