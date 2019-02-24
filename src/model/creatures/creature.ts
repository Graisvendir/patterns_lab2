import { Movements } from '../properties/movement';
import canRun = Movements.canRun;
import canFly = Movements.canFly;
import canSwim = Movements.canSwim;

abstract class Creature {
    protected run: canRun;
    protected fly: canFly;
    protected swim: canSwim;
    protected name: string;
    protected imgSrc: string;

    constructor(
        _name: string
    ) {
        this.name = _name;
    }

    get getRun(): Movements.canRun {
        return this.run;
    }

    get getFly(): Movements.canFly {
        return this.fly;
    }

    get getSwim(): Movements.canSwim {
        return this.swim;
    }

    get getName(): string {
        return this.name;
    }

    get getImgSrc(): string {
        return this.imgSrc;
    }

    set setRun(_value: Movements.canRun) {
        this.run = _value;
    }

    set setFly(_value: Movements.canFly) {
        this.fly = _value;
    }

    set setSwim(_value: Movements.canSwim) {
        this.swim = _value;
    }  

    set setImgSrc(_value: string) {
        this.imgSrc = _value;
    }

    
}

export default Creature;