import Monster from "../../model/creatures/monster";
import { Movements } from "../../model/properties/movement";
import Robot from "../../model/creatures/robot";
import RobotToMonster from "./adapter";

export default class FabricMethod {

    private defaultRun = new Movements.canRun(10);
    private defaultFly = new Movements.canFly(10);
    private defaultSwim = new Movements.canSwim(10);
    private defaultRide = new Movements.canRide(10);

    constructor() { }

    fabricDefaultMonster() : Monster {
        let defMonster = new Monster('defaultMonster');
        defMonster.setRun = this.defaultRun;
        defMonster.setFly = this.defaultFly;
        defMonster.setSwim = this.defaultSwim;
        return defMonster;
    }

    fabricDefaultRobot() : Robot {
        let defRobot = new Robot('defaultMonster');
        defRobot.setRide = this.defaultRide;
        return defRobot;
    }

    fabricDefaultAdaptedRobot(_robot: Robot) : RobotToMonster {
        let defaultAdoptedRobot = new RobotToMonster('defaultAdoptedRobot', _robot);
        defaultAdoptedRobot.convertRideToRun();
        return defaultAdoptedRobot;
    }
}