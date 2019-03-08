import ISubscriber from "../pattern/observer/ISubscriber";
import { Movements } from "./properties/movement";

class Robot implements ISubscriber {

    private ride: Movements.canRide;
    private name: string;
    private imgSrc: string;
    private commanderName: string;

    constructor(
        _name: string,
    ) {
        this.name = _name;
        this.imgSrc = '';
    }

    get getName(): string {
        return this.name;
    }

    get getRide(): Movements.canRide {
        return this.ride;
    }

    get getImgSrc(): string {
        return this.imgSrc;
    }

    set setRide(_value: Movements.canRide) {
        this.ride = _value;
    }

    set setName(_value: string) {
        this.name = _value;
    }

    set setImgSrc(_value: string) {
        this.imgSrc = _value;
    }

    public update(_newCommanderName: string) {
        this.commanderName = _newCommanderName;
    }
}

export default Robot;
