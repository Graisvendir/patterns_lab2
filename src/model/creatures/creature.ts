import { Movements } from '../properties/movement';
import * as Constants from '../../constants';
import canRun = Movements.canRun;
import canFly = Movements.canFly;
import canSwim = Movements.canSwim;

abstract class Creature {
	protected run		: canRun;
    protected fly		: canFly;
	protected swim		: canSwim;
	protected name		: string;

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

    abstract show(): void;
}

export default Creature;