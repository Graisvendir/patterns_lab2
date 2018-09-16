import { Property } from './property';
import { CLAWS, FANGS, SPIT } from '../constants';
/**
 * abstract class for Weapons
 */
export namespace Weapons {
	export abstract class Weapon extends Property {
		protected power: number = 0;
		constructor(_label: string, _power: number) {
			super(_label);
			this.power = _power;
		}
		get getPower(): number {
			return this.power;
		}
		set setPower(_power: number) {
			this.power = _power;
		}	
		public output(): string {
			return 'i can ' + this.label + ' with power: ' + this.power;
		};
	}

	// когти
	export class Claws extends Weapon {
		constructor(_power: number) {
			super(CLAWS, _power);
		}
	}

	// клыки
	export class Fangs extends Weapon {
		constructor(_power: number) {
			super(FANGS, _power);
		}
	}

	// плеваться ядом
	export class Spit extends Weapon {
		constructor(_power: number) {
			super(SPIT, _power);
		}
	}
}
