import IHandler from "../IHandler";
import ISubscriber from "./ISubscriber";

export default class Publisher implements IHandler {

    // параметры next и handledText нужны для паттерна цепочка обязанностей
    private next: IHandler;
    private handledText: string;
    private name: string;
    private listeners: ISubscriber[];

    constructor(_name: string) {
        this.name = _name;
        this.listeners = [];
    }

    public subscribe(_newSubscriber: ISubscriber) {
        _newSubscriber.update(this);
        this.listeners.push(_newSubscriber);
    }

    public unsubscribe(subscriber: ISubscriber) {
        this.listeners.filter((elem: ISubscriber) => elem !== subscriber);
    }

    public notify() {
        for (const elem of this.listeners) {
            elem.update(this);
        }
    }

    get getName(): string {
        return this.name;
    }

    set setName(_value: string) {
        this.name = _value;
        this.notify();
    }

    public setNext(_next: IHandler): void {
        this.next = _next;
    }

    public handle(): void {
        if (this.handledText === undefined) {
            alert('cant handle, call next');
            this.next.handle();
        } else {
            alert(this.handledText);
        }
    }
}
