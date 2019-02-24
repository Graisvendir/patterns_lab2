import Monster from "../model/creatures/monster";
import Robot from "../model/creatures/robot";
import RobotToMonster from "../controller/pattern/adapter";
import { robotError, adaptedRobotError, monsterError } from "../constants";
import FabricMethod from "../controller/pattern/fabricMethod";

class Facade {
    private currentCreature: number;
    private monsterTemplate: Monster;
    private robotTemplate: Robot;
    private adaptedRobot: RobotToMonster;

    constructor() {
        let fabrick = new FabricMethod();
        this.currentCreature = 0;
        this.monsterTemplate = fabrick.fabricDefaultMonster();
        this.robotTemplate = fabrick.fabricDefaultRobot();
        this.adaptedRobot = fabrick.fabricDefaultAdaptedRobot(this.robotTemplate);

        document.getElementById('monster').onclick = this.showMonster;
        document.getElementById('robot').onclick = this.showRobot;
        document.getElementById('adaptedRobot').onclick = this.showAdaptedRobot;
        document.getElementById('run').onclick;

    }

    set setCurrentCreature(_index: number) {
        this.currentCreature = _index;
    }

    // -----------------------  SHOW MOVEMENTS ---------------------------//
    showRun() {
        let place = <HTMLImageElement>document.getElementById('motion');
        switch (this.currentCreature) {
            case 1:
                this.monsterTemplate.getRun.getImgSrc.forEach(element => {
                    setTimeout(function () { place.src = element }, 500);
                });
                break;
            case 2:
                alert(robotError);
                break;
            case 3:
                this.adaptedRobot.getRun.getImgSrc.forEach(element => {
                    setTimeout(function () { place.src = element }, 500);
                });
                break;
            default:
                break;
        }
    }

    showFly() {
        let place = <HTMLImageElement>document.getElementById('motion');
        switch (this.currentCreature) {
            case 1:
                this.monsterTemplate.getRun.getImgSrc.forEach(element => {
                    setTimeout(function () { place.src = element }, 500);
                });
                break;
            case 2:
                alert(robotError);
                break;
            case 3:
                alert(adaptedRobotError);
                break;
            default:
                break;
        }
    }

    showSwim() {
        let place = <HTMLImageElement>document.getElementById('motion');
        switch (this.currentCreature) {
            case 1:
                this.monsterTemplate.getRun.getImgSrc.forEach(element => {
                    setTimeout(function () { place.src = element }, 500);
                });
                break;
            case 2:
                alert(robotError);
                break;
            case 3:
                alert(adaptedRobotError);
                break;
            default:
                break;
        }
    }

    showRide() {
        let place = <HTMLImageElement>document.getElementById('motion');
        switch (this.currentCreature) {
            case 1:
                alert(monsterError);
            case 2:
                this.monsterTemplate.getRun.getImgSrc.forEach(element => {
                    setTimeout(function () { place.src = element }, 500);
                });
                break;
            case 3:
                alert(adaptedRobotError);
                break;
            default:
                break;
        }
    }

    // ----------------------- SHOW CREACTURES ----------------------------//

    showMonster() {
        let place = <HTMLImageElement>document.getElementById('persona');
        place.src = this.monsterTemplate.getImgSrc;
        this.currentCreature = 1;
    }

    showRobot() {
        let place = <HTMLImageElement>document.getElementById('persona');
        place.src = this.robotTemplate.getImgSrc;
        this.currentCreature = 2;
    }

    showAdaptedRobot() {
        let place = <HTMLImageElement>document.getElementById('persona');
        place.src = this.adaptedRobot.getImgSrc;
        this.currentCreature = 3;
    }


    //-------------------------- buttons of creatures -----------------------------//
    buttonMonsterClick() {
        this.showMonster();
    }

    buttonRobotClick() {
        this.showRobot();
    }

    buttonAdaptedRobotClick() {
        this.showAdaptedRobot();
    }

}

export default Facade;