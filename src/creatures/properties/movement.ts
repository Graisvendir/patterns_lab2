import { FLY, RIDE, RUN, SWIM } from "../../constants";

export namespace Movements {
/**
 * abstract class for movements, extends from Property
 */

	abstract class Movement {
		protected label: string;
		protected value: number;

		constructor(_label: string, _value: number) {
			this.label = _label;
			this.value = _value;
		}

		get getLabel(): string {
			return this.label;
		}

		set setLabel(_label: string) {
			this.label = _label;
		}

		get getValue(): number {
			return this.value;
		}

		set setValue(_value: number) {
			this.value = _value;
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
	export class CanRun extends Movement {
		constructor(_speed: number = 0) {
			super(RUN, _speed);
		}
	}

	export class CanFly extends Movement {
		constructor(_speed: number = 0) {
			super(FLY, _speed);
		}
	}

	export class CanSwim extends Movement {
		constructor(_speed: number = 0) {
			super(SWIM, _speed);
		}
	}

	export class CanRide extends Movement {
		constructor(_speed: number = 0) {
			super(RIDE, _speed);
		}
	}
}
