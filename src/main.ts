import { Composite } from "./controller/pattern/composite";
import { addCreature } from "./view/addCreature";
import Creature from "./controller/creatures/creature";
import Monster from "./controller/creatures/monster";
import Robot from "./controller/creatures/robot";

export let currentCreature = Object;
export const monsterTemplate: Monster = new Monster('monster');
export const robotTemplate: Robot = new Robot('monster');
