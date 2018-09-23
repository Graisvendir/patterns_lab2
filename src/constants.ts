import { Movements } from './properties/movement';
import { Weapons } from './properties/weapons';

export const ALIVE = 'alive';
export const DEAD = 'dead';
export const FEEDING = 'feeding';
export const ESCAPE = 'escape';

export const COUNT_OF_PROPERTIES = 6;

export const CLAWS = 'claws';
export const FANGS = 'fangs';
export const SPIT = 'spit';

export const RUN = 'run';
export const FLY = 'fly';
export const SWIM = 'swim';

export const ARMOR = 'armor';

export function addMessage(_message: string): void {
	console.log(_message);
}

export function createDefaultMovements() : Map<string, Movements.Movement> {
	let newMovements = new Map<string, Movements.Movement>();
	newMovements.set(RUN, null);
	newMovements.set(FLY, null);
	newMovements.set(SWIM, null);
	return newMovements;
}

export function createDefaultWeapons() : Map<string, Weapons.Weapon> {
	let newWeapons = new Map<string, Weapons.Weapon>();
	newWeapons.set(CLAWS, null);
	newWeapons.set(FANGS, null);
	newWeapons.set(SPIT, null);
	return newWeapons;
}