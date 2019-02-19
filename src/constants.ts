import { Movements } from './controller/properties/movement';
import { Weapons } from './controller/properties/weapons';

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

export function createDefaultMovements() : Map<string, Movements.Movement> {
	let newMovements = new Map<string, Movements.Movement>();
	newMovements.set(RUN, new Movements.canRun(0));
	newMovements.set(FLY, new Movements.canFly(0));
	newMovements.set(SWIM, new Movements.canSwim(0));
	return newMovements;
}

export function createDefaultWeapons() : Map<string, Weapons.Weapon> {
	let newWeapons = new Map<string, Weapons.Weapon>();
	newWeapons.set(CLAWS, new Weapons.Claws);
	newWeapons.set(FANGS, new Weapons.Fangs);
	newWeapons.set(SPIT, new Weapons.Spit);
	return newWeapons;
}