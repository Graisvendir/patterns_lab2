
interface IWeapon {
    output(): string;
}

abstract class Weapon implements IWeapon {
    private name: string = '';
    power: number = 0;
    constructor(_name: string, _power: number) {
        this.name = _name;
        this.power = _power;
    }
    output(): string {
        return 'i can ' + this.label + ' with speed: ' + this.speed;
    }
}

