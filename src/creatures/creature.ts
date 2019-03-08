import { Movements } from "./properties/movement";
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
        name: string,
    ) {
        this.name = name;
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

    set setRun(value: Movements.canRun) {
        this.run = value;
    }

    set setFly(value: Movements.canFly) {
        this.fly = value;
    }

    set setSwim(value: Movements.canSwim) {
        this.swim = value;
    }

    set setImgSrc(value: string) {
        this.imgSrc = value;
    }

}

export default Creature;
