import ISubscriber from "../pattern/observer/ISubscriber";
import Commander from "./commander";
import { Movements } from "./properties/movement";

class Robot implements ISubscriber {

    private ride: Movements.canRide;
    private name: string;
    private imgSrc: string;
    private commander: Commander;

    constructor(
        _name: string,
    ) {
        this.name = _name;
        this.imgSrc = '';
    }

    public get getName(): string {
        return this.name;
    }

    public get getRide(): Movements.canRide {
        return this.ride;
    }

    public get getImgSrc(): string {
        return this.imgSrc;
    }
    
    public get getCommander(): Commander {
        return this.commander;
    }

    public set setRide(_value: Movements.canRide) {
        this.ride = _value;
    }

    public set setName(_value: string) {
        this.name = _value;
    }

    public set setImgSrc(_value: string) {
        this.imgSrc = _value;
    }

    /**
     * Нужно для паттерна Наблюдатель, обновляет ссылку на командира
     * @param _newCommander 
     */
    public update(_newCommander: Commander) {
        this.commander = _newCommander;
    }
}

export default Robot;
