import Monster from "../model/creatures/monster";
import Robot from "../model/creatures/robot";
import RobotToMonster from "../controller/pattern/adapter";

class Facade {
    private currentCreature: number;
    private monsterTemplate: Monster ;
    private robotTemplate: Robot;
    private adaptedRobot: RobotToMonster ;

    constructor() {
        this.currentCreature = 0;
        this.monsterTemplate = new Monster('monster');
        this.robotTemplate = new Robot('robot');
        this.adaptedRobot = new RobotToMonster('roboMonster');

    }

    set setCurrentCreature(_index: number) {
        this.currentCreature = _index;
    }


// -----------------------  buttons show movements ---------------------------//
    showRun() {
        let place = <HTMLImageElement>document.getElementById('motion');
        setTimeout(function() {place.src = '/img/run/1.png'}, 500);
        setTimeout(function() {place.src = '/img/run/2.png'}, 500);
        setTimeout(function() {place.src = '/img/run/3.png'}, 500);
        setTimeout(function() {place.src = '/img/run/4.png'}, 500);
        setTimeout(function() {place.src = '/img/run/5.png'}, 500);
    }

    showFly() {
        let place = <HTMLImageElement>document.getElementById('motion');
        setTimeout(function() {place.src = '/img/fly/1.png'}, 500);
        setTimeout(function() {place.src = '/img/fly/2.png'}, 500);
        setTimeout(function() {place.src = '/img/fly/3.png'}, 500);
        setTimeout(function() {place.src = '/img/fly/4.png'}, 500);
    }

    showSwim() {
        let place = <HTMLImageElement>document.getElementById('motion');
        setTimeout(function() {place.src = '/img/swim/1.png'}, 500);
        setTimeout(function() {place.src = '/img/swim/2.png'}, 500);
        setTimeout(function() {place.src = '/img/swim/3.png'}, 500);
    }

    showRide() {
        let place = <HTMLImageElement>document.getElementById('motion');
        setTimeout(function() {place.src = '/img/ride/1.png'}, 500);
        setTimeout(function() {place.src = '/img/ride/2.png'}, 500);
        setTimeout(function() {place.src = '/img/ride/3.png'}, 500);
    }


    //-------------------------- buttons of creatures -----------------------------//
    static buttonMonsterClick() {
        // set currentCreature
        this.monsterTemplate.show();
    }

    static buttonRobotClick() {
        // set currentCreature
        let place = <HTMLImageElement>document.getElementById('persona');
        place.src = '/img/robot.jpg';
    }

    static buttonAdaptedRobotClick() {
        // set currentCreature
        let place = <HTMLImageElement>document.getElementById('persona');
        place.src = '/img/adaptedRobot.jpg';
    }

}

export default Facade;