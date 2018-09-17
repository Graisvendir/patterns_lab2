import { Property } from './property';
import { RUN, FLY, SWIM } from '../constants';

export namespace Movements {
	/**
	 * abstract class for movements, extends from Property
	 */

	export abstract class Movement extends Property {
		private speed: number = 0;
		constructor(_label: string, _speed: number) {
			super(_label);
			this.speed = _speed;
		}
		get getSpeed(): number {
			return this.speed;
		}
		set setSpeed(_speed: number) {
			this.speed = _speed;
		}
		public output(): string {
			if (this.speed === 0) {
				return 'i cant ' + this.label; 
			} else {
				return 'i can ' + this.label + ' with speed: ' + this.speed;
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

}