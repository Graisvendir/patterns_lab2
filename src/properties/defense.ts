import { Property } from "./property";


export class Defense extends Property {
    protected armor: number;
    constructor(_label: string, _armor: number) {
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
        return 'i can ' + this.label + ' with speed: ' + this.armor;
    }
}