import { Movements } from "./properties/movement";
import canRun = Movements.CanRun;
import canFly = Movements.CanFly;
import canSwim = Movements.CanSwim;

abstract class Creature {
    protected run: canRun;
    protected fly: canFly;
    protected swim: canSwim;
    protected name: string;

    constructor(
        name: string,
    ) {
        this.name = name;
    }

    get getRun(): canRun {
        return this.run;
    }

    get getFly(): canFly {
        return this.fly;
    }

    get getSwim(): canSwim {
        return this.swim;
    }

    get getName(): string {
        return this.name;
    }

    set setRun(value: canRun) {
        this.run = value;
    }

    set setFly(value: canFly) {
        this.fly = value;
    }

    set setSwim(value: canSwim) {
        this.swim = value;
    }

    scream() {
        console.log(this.name + '\n');
        console.log(this.run.output() + '\n');
        console.log(this.fly.output() + '\n');
        console.log(this.swim.output() + '\n');
    }

}

export default Creature;
