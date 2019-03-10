import {Movements} from "../../creatures/properties/movement";
import Robot from "../../creatures/robot";
import IBuilder from "./IBuilder";

export default class RobotBuilder implements IBuilder {
    private robot: Robot;

    public reset(): Robot {
        this.robot = new Robot('classicRobot');
        return this.robot;
    }
    
    public buildRide(): Robot {
        if (this.robot == null) {
            this.reset();
        }
        this.robot.setRide = new Movements.canRide(10);
        return this.robot;
    }

}
