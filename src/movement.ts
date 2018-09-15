
export interface IMovement {
	label: string;
	speed: number;
	output(): void;
}

/**
 * abstract movement
 */
abstract class Movement implements IMovement {
	label: string;
	speed: number = 0;
	constructor(_label: string, _speed: number) {
		this.label = _label;
		this.speed = _speed;
	}
	output(): string {
		return 'i can ' + this.label + ' with speed: ' + this.speed;
	};
}

/**
 * move classes
 */
export class canRun extends Movement {
	constructor(_speed: number) {
		super('run', _speed);
	}
}

export class canFly extends Movement {
	constructor(_speed: number) {
		super('fly', _speed);
	}
}

export class canSwim extends Movement {
	constructor(_speed: number) {
		super('swim', _speed);
	}
}
