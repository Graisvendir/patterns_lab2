import Monster from "../model/creatures/monster";
import Robot from "../model/creatures/robot";
import RobotToMonster from "../controller/pattern/adapter";
import { robotError, adaptedRobotError, monsterError } from "../constants";
import FabricMethod from "../controller/pattern/fabricMethod";
import Resources from "../controller/pattern/resourcesFlywigth";
import RobotBuilder from "../controller/pattern/builder/RobotBuilder";

class Facade {
    private currentCreature: number;
    private monsterTemplate: Monster;
    private robotTemplate: Robot;
    private adaptedRobot: RobotToMonster;
    private res = Resources.getInstace();

    constructor() {
        let fabrick = new FabricMethod();
        let robotBuilder = new RobotBuilder();
        this.currentCreature = 0;
        this.monsterTemplate = fabrick.fabricDefaultMonster();
        this.robotTemplate = robotBuilder.reset();
        
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
                place.src = this.res.getRunRes;
                break;
            case 2:
                alert(robotError);
                break;
            case 3:
                place.src = this.res.getRunRes;
                break;
            default:
                break;
        }
    }

    showFly() {
        let place = <HTMLImageElement>document.getElementById('motion');
        switch (this.currentCreature) {
            case 1:
                place.src = this.res.getFlyRes;
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
                place.src = this.res.getSwimRes;
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
                break;
            case 2:
                place.src = this.res.getRideRes;
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
        place.src = this.res.getMonsterRes;
        this.currentCreature = 1;
        (<HTMLImageElement>document.getElementById('motion')).src = '';
    }

    showRobot() {
        let place = <HTMLImageElement>document.getElementById('persona');
        place.src = this.res.getRobotRes;
        this.currentCreature = 2;
        (<HTMLImageElement>document.getElementById('motion')).src = '';
    }

    showAdaptedRobot() {
        let place = <HTMLImageElement>document.getElementById('persona');
        place.src = this.res.getAdaptedRobotRes;
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