import Monster from "../../model/creatures/monster";
import { Movements } from "../../model/properties/movement";
import Robot from "../../model/creatures/robot";
import RobotToMonster from "./adapter";

export default class FabricMethod {

    private defaultRun = new Movements.canRun(10);
    private defaultFly = new Movements.canFly(10);
    private defaultSwim = new Movements.canSwim(10);
    private defaultRide = new Movements.canRide(10);

    constructor() {
        this.defaultRun.setImgSrc = "./img/run.gif";

        this.defaultFly.setImgSrc = "./img/fly.gif";

        this.defaultSwim.setImgSrc = "./img/swim.gif";

        this.defaultRide.setImgSrc = "./img/ride.gif";

    }

    fabricDefaultMonster() : Monster {
        let defMonster = new Monster('defaultMonster');
        defMonster.setImgSrc = './img/monster.jpg';
        defMonster.setRun = this.defaultRun;
        defMonster.setFly = this.defaultFly;
        defMonster.setSwim = this.defaultSwim;
        return defMonster;
    }

    fabricDefaultRobot() : Robot {
        let defRobot = new Robot('defaultMonster');
        defRobot.setImgSrc = './img/robot.jpg';
        defRobot.setRide = this.defaultRide;
        return defRobot;
    }

    fabricDefaultAdaptedRobot(_robot: Robot) : RobotToMonster {
        let defaultAdoptedRobot = new RobotToMonster('defaultAdoptedRobot', _robot);
        defaultAdoptedRobot.setImgSrc = './img/adaptedRobot.png';
        defaultAdoptedRobot.convertRideToRun();
        return defaultAdoptedRobot;
    }
}