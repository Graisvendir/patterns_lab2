import { Property } from "./property";


export class Defense extends Property {
    protected armor: number;
    constructor(_label: string, _armor: number = 0) {
        super(_label);
        this.armor = _armor;
    }
    get getArmor(): number {
        return this.armor;
    }
    set setArmor(_armor: number) {
        this.armor = _armor;
    }
    output(): string {
        if (this.armor === 0) {
            return 'i not have ' + this.label; 
        } else {
            return 'i have ' + this.label + ' with amout: ' + this.armor;
        }
    }
}