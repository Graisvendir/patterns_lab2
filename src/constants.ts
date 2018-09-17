import { Movements } from './properties/movement';
import { Weapons } from './properties/weapons';
import { Defense } from './properties/defense';

export type PROPERTY = Movements.Movement | Weapons.Weapon | Defense;
export const ALIVE = 'alive';
export const DEAD = 'dead';
export const FEEDING = 'feeding';

export type WEAPON = Weapons.Weapon;
export const CLAWS = 'claws';
export const FANGS = 'fangs';
export const SPIT = 'spit';

export type MOVEMENT = Movements.Movement;
export const RUN = 'run';
export const FLY = 'fly';
export const SWIM = 'swim';

export const ARMOR = 'armor';

export const DEFAULT_MOVEMENTS = new Map<string, Movements.Movement>();
DEFAULT_MOVEMENTS.set(RUN, new Movements.canRun());
DEFAULT_MOVEMENTS.set(FLY, new Movements.canFly());
DEFAULT_MOVEMENTS.set(SWIM, new Movements.canSwim());

export const DEFAULT_WEAPONS = new Map<string, Weapons.Weapon>();
DEFAULT_WEAPONS.set(CLAWS, new Weapons.Claws());
DEFAULT_WEAPONS.set(FANGS, new Weapons.Fangs());
DEFAULT_WEAPONS.set(SPIT, new Weapons.Spit());