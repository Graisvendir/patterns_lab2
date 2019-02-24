import Robot from "../../model/creatures/robot";
import { Movements } from "../../model/properties/movement";
import Creature from "../../model/creatures/creature";

// adapt robot to monster

class RobotToMonster extends Creature {

    private robot           : Robot;

    constructor(_name: string, _robot: Robot) {
        super(_name);
        this.robot = _robot;
    }

    convertRideToRun() {
        this.run = new Movements.canRun(this.robot.getRide.getValue);
    }
}

export default RobotToMonster;