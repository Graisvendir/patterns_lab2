import Monster from "./model/creatures/monster";
import Robot from "./model/creatures/robot";
import RobotToMonster from "./controller/pattern/adapter";

export let currentCreature = 0;
export const monsterTemplate: Monster = new Monster('monster');
monsterTemplate.setDefaultMovements();
export const robotTemplate: Robot = new Robot('robot');
export const adaptedRobot: RobotToMonster = new RobotToMonster('roboMonster');
