import { Property } from "../properties/property";
import Creature from "../creatures/creature";

abstract class abstractIterator {
    abstract First();
    abstract End();
	abstract Next();
	abstract Current();
}

/**
 * iterator for Creature properties
 */
export class Iterator extends abstractIterator {
    private current: number;
    private array: Property[] = [];

    constructor(_creature: Creature) {
        super();
        this.current = 0;
        for (let key of _creature.getMovements.values()) {
            if (key) {
                this.array.push(key);
            }
        }
        for (let key of _creature.getWeapons.values()) {
            if (key) {
                this.array.push(key);
            }
        }
        this.array.push(_creature.getArmor);
    }

	get getIndex() {
		return this.current;
	}

    First() {
        return this.array[0];
    }

    End() {
		if (this.array.length) {
			return this.array[this.array.length - 1];     
		}
		return null;
    }

	Next() {
		if (this.current < this.array.length - 1) {
			this.current++;
		}
		return this.array[this.current]; 
	}

	Current() {
		return this.array[this.current];
	}
}