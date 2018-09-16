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
