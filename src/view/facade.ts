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

        document.getElementById('monster').onclick = this.showMonster.bind(this);
        document.getElementById('robot').onclick = this.showRobot.bind(this);
        document.getElementById('adaptedRobot').onclick = this.showAdaptedRobot.bind(this);
        document.getElementById('run').onclick = this.showRun.bind(this);
        document.getElementById('fly').onclick = this.showFly.bind(this);
        document.getElementById('swim').onclick = this.showSwim.bind(this);
        document.getElementById('ride').onclick = this.showRide.bind(this);
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
                this.monsterTemplate.getFly.getImgSrc.forEach(element => {
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
                this.monsterTemplate.getSwim.getImgSrc.forEach(element => {
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
                this.robotTemplate.getRide.getImgSrc.forEach(element => {
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
        (<HTMLImageElement>document.getElementById('motion')).src = '';
    }

    showRobot() {
        let place = <HTMLImageElement>document.getElementById('persona');
        place.src = this.robotTemplate.getImgSrc;
        this.currentCreature = 2;
        (<HTMLImageElement>document.getElementById('motion')).src = '';
    }

    showAdaptedRobot() {
        let place = <HTMLImageElement>document.getElementById('persona');
        place.src = this.adaptedRobot.getImgSrc;
        this.currentCreature = 3;
        (<HTMLImageElement>document.getElementById('motion')).src = '';
    }


    //-------------------------- buttons of creatures -----------------------------//
    buttonMonsterClick(_event: Event) {
        this.showMonster();
    }

    buttonRobotClick(_event: Event) {
        this.showRobot();
    }

    buttonAdaptedRobotClick(_event: Event) {
        this.showAdaptedRobot();
    }

    buttonRun(_event: Event) {
        this.showRun();
    }

    buttonFly(_event: Event) {
        this.showFly();
    }
    
    buttonSwim(_event: Event) {
        this.showSwim();
    }
    
    buttonRide(_event: Event) {
        this.showRide();
    }
    
}

export default Facade;