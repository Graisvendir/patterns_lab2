import { Property } from './property';
import { RUN, FLY, SWIM, RIDE } from '../../constants';

export namespace Movements {
	/**
	 * abstract class for movements, extends from Property
	 */

	export abstract class Movement extends Property {
		constructor(_label: string, _speed: number) {
			super(_label, _speed);
		}
		
		public output(): string {
			if (this.value === 0) {
				return '	i cant ' + this.label;
			} else {
				return '	i can ' + this.label + ' with speed: ' + this.value;
			}
		};
	}

	/**
	 * move classes
	 */
	export class canRun extends Movement {
		constructor(_speed: number = 0) {
			super(RUN, _speed);
		}
	}

	export class canFly extends Movement {
		constructor(_speed: number = 0) {
			super(FLY, _speed);
		}
	}

	export class canSwim extends Movement {
		constructor(_speed: number = 0) {
			super(SWIM, _speed);
		}
	}

	export class canRide extends Movement {
		constructor(_speed: number = 0) {
			super(RIDE, _speed);
		}
	}
}