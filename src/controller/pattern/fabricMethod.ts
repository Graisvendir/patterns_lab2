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
        this.defaultRun.addImgSrc("./img/run/1.png");
        this.defaultRun.addImgSrc("./img/run/2.png");
        this.defaultRun.addImgSrc("./img/run/3.png");
        this.defaultRun.addImgSrc("./img/run/4.png");
        this.defaultRun.addImgSrc("./img/run/5.png");

        this.defaultFly.addImgSrc("./img/fly/1.png");
        this.defaultFly.addImgSrc("./img/fly/2.png");
        this.defaultFly.addImgSrc("./img/fly/3.png");
        this.defaultFly.addImgSrc("./img/fly/4.png");

        this.defaultSwim.addImgSrc("./img/swim/1.png");
        this.defaultSwim.addImgSrc("./img/swim/2.png");
        this.defaultSwim.addImgSrc("./img/swim/3.png");

        this.defaultRide.addImgSrc("./img/ride/1.png");
        this.defaultRide.addImgSrc("./img/ride/1.png");
        this.defaultRide.addImgSrc("./img/ride/1.png");

    }

    fabricDefaultMonster() : Monster {
        let defMonster = new Monster('defaultMonster');
        defMonster.setRun = this.defaultRun;
        defMonster.setFly = this.defaultFly;
        defMonster.setSwim = this.defaultSwim;
        return defMonster;
    }

    fabricDefaultRobot() : Robot {
        let defMonster = new Robot('defaultMonster');
        defMonster.setRide = this.defaultRun;
        return defMonster;
    }

    fabricDefaultAdaptedRobot(_robot: Robot) : RobotToMonster {
        let defaultAdoptedRobot = new RobotToMonster('defaultAdoptedRobot', _robot);
        defaultAdoptedRobot.convertRideToRun();
        return defaultAdoptedRobot;
    }
}