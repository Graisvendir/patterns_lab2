import { Movements } from './controller/properties/movement';

export const COUNT_OF_PROPERTIES = 6;

export const RUN = 'run';
export const FLY = 'fly';
export const SWIM = 'swim';
export const RIDE = 'ride';

export function createDefaultMovements() : Map<string, Movements.Movement> {
	let newMovements = new Map<string, Movements.Movement>();
	newMovements.set(RUN, new Movements.canRun(10));
	newMovements.set(FLY, new Movements.canFly(10));
	newMovements.set(SWIM, new Movements.canSwim(10));
	return newMovements;
}