import Robot from "../creatures/robot";
import { Movements } from "../creatures/properties/movement";
import Creature from "../creatures/creature";

// adapt robot to monster

class RobotToMonster extends Creature {

    private robot           : Robot;

    constructor(_name: string, _robot: Robot) {
        super(_name);
        this.robot = _robot;
    }

    convertRideToRun() {
        this.run = new Movements.canRun(this.robot.getRide.getValue);
        this.run.setImgSrc = this.robot.getRide.getImgSrc;
    }
}

export default RobotToMonster;