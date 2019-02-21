import Monster from "../creatures/monster";
import Robot from "../creatures/robot";
import { Movements } from '../properties/movement';

// adapt robot to monster

class RobotToMonster extends Monster {

    private robot           : Robot;
    protected movements		: Map<string, Movements.Movement>;

    constructor(_name: string) {
        super(_name);
    }
}