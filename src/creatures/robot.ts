import IHandler from "../pattern/IHandler";
import ISubscriber from "../pattern/observer/ISubscriber";
import Commander from "./commander";
import { Movements } from "./properties/movement";

class Robot implements ISubscriber, IHandler {

    // параметры next и handledText нужны для паттерна цепочка обязанностей
    private next: IHandler;
    private handledText: string = 'robot handle it!';
    private ride: Movements.CanRide;
    private name: string;
    private commander: Commander;

    constructor(
        _name: string,
    ) {
        this.name = _name;
    }

    public get getRide(): Movements.CanRide {
        return this.ride;
    }
    
    public get getCommander(): Commander {
        return this.commander;
    }

    public set setRide(_value: Movements.CanRide) {
        this.ride = _value;
    }

    /**
     * Нужно для паттерна Наблюдатель, обновляет ссылку на командира
     * @param _newCommander 
     */
    public update(_newCommander: Commander) {
        this.commander = _newCommander;
    }

    // надо для цепочки обязанностей
    public setNext(_next: IHandler): void {
        this.next = _next;
    }

    public handle(): void {
        alert(this.handledText);
    }
}

export default Robot;
