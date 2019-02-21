import Monster from "../../model/creatures/monster";
import Robot from "../../model/creatures/robot";
import { Movements } from "../../model/properties/movement";

// adapt robot to monster

class RobotToMonster extends Monster {

    private robot           : Robot;
    protected run   		: Movements.canRun;

    constructor(_name: string) {
        super(_name);
    }

    setRun() {
        this.run = new Movements.canRun(this.robot.getRide.getValue);
    }
}

export default RobotToMonster;