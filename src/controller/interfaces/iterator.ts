import { Property } from "../properties/property";
import Creature from "../creatures/creature";

abstract class abstractIterator {
    abstract First(): Property;
    abstract End(): Property;
	abstract Next(): Property;
	abstract Current(): Property;
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

	get getCurrent(): number {
		return this.current;
	}

    First(): Property {
        return this.array[0];
    }

    End(): Property {
		if (this.array.length) {
			return this.array[this.array.length - 1];     
		}
		return null;
    }

	Next(): Property {
		if (this.current < this.array.length - 1) {
			this.current++;
		}
		return this.array[this.current]; 
	}

	Current(): Property {
		return this.array[this.current];
	}
}