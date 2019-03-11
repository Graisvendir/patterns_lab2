import Monster from "../creatures/monster";
import { Movements } from "../creatures/properties/movement";
import Robot from "../creatures/robot";
import RobotToMonster from "./adapter";

export default class FabricMethod {

    private defaultRun = new Movements.CanRun(10);
    private defaultFly = new Movements.CanFly(10);
    private defaultSwim = new Movements.CanSwim(10);
    private defaultRide = new Movements.CanRide(10);

    public fabricDefaultMonster(): Monster {
        const defMonster = new Monster("defaultMonster");
        defMonster.setRun = this.defaultRun;
        defMonster.setFly = this.defaultFly;
        defMonster.setSwim = this.defaultSwim;
        return defMonster;
    }

    public fabricDefaultRobot(): Robot {
        const defRobot = new Robot("defaultMonster");
        defRobot.setRide = this.defaultRide;
        return defRobot;
    }

    public fabricDefaultAdaptedRobot(_robot: Robot): RobotToMonster {
        const defaultAdoptedRobot = new RobotToMonster("defaultAdoptedRobot", _robot);
        defaultAdoptedRobot.convertRideToRun();
        return defaultAdoptedRobot;
    }
}
