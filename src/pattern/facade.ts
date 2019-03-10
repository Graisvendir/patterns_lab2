import { adaptedRobotError, monsterError, robotError } from "../constants";
import Commander from "../creatures/commander";
import Monster from "../creatures/monster";
import Robot from "../creatures/robot";
import RobotToMonster from "./adapter";
import RobotBuilder from "./builder/RobotBuilder";
import FabricMethod from "./fabricMethod";
import Resources from "./resourcesFlywigth";

/**
 * This class control all events of view
 */
class Facade {
	private currentCreature: number;
	private monsterTemplate: Monster;
	private robotTemplate: Robot;
	private adaptedRobot: RobotToMonster;
	private res = new Resources();
	private commander: Commander;

	constructor() {
		const fabrick = new FabricMethod();
		const robotBuilder = new RobotBuilder();
		
		this.currentCreature = 0;
		this.monsterTemplate = fabrick.fabricDefaultMonster();
		this.robotTemplate = robotBuilder.buildRide();
		this.commander = Commander.getInstance();
		this.commander.subscribe(this.robotTemplate);
		this.commander.setNext(this.robotTemplate);
		this.adaptedRobot = fabrick.fabricDefaultAdaptedRobot(this.robotTemplate);

		document.getElementById('monster').onclick = this.showMonster.bind(this);
		document.getElementById('robot').onclick = this.showRobot.bind(this);
		document.getElementById('adaptedRobot').onclick = this.showAdaptedRobot.bind(this);
		document.getElementById('run').onclick = this.showRun.bind(this);
		document.getElementById('fly').onclick = this.showFly.bind(this);
		document.getElementById('swim').onclick = this.showSwim.bind(this);
		document.getElementById('ride').onclick = this.showRide.bind(this);
		document.getElementById('setCommanderName').onclick = this.changeCommander.bind(this);
		document.getElementById('callCommand').onclick = this.commander.handle.bind(this.commander);
	}

	set setCurrentCreature(_index: number) {
		this.currentCreature = _index;
	}

	// -----------------------  SHOW MOVEMENTS ---------------------------//
	public showRun() {
		const place = document.getElementById('motion') as HTMLImageElement;
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

	public showFly() {
		const place = document.getElementById('motion') as HTMLImageElement;
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

	public showSwim() {
		const place = document.getElementById('motion') as HTMLImageElement;
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

	public showRide() {
		const place = document.getElementById('motion') as HTMLImageElement;
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

	public showMonster() {
		const commander = document.getElementById('commander') as HTMLParagraphElement;
		commander.innerText = '';
		const place = document.getElementById('persona') as HTMLImageElement;
		place.src = this.res.getMonsterRes;
		this.currentCreature = 1;
		(document.getElementById('motion') as HTMLImageElement).src = '';
	}

	public showRobot() {
		const place = document.getElementById('persona') as HTMLImageElement;
		const commander = document.getElementById('commander') as HTMLParagraphElement;
		commander.innerHTML = 'Commander of robot: ' + this.robotTemplate.getCommander.getName;
		place.src = this.res.getRobotRes;
		this.currentCreature = 2;
		(document.getElementById('motion') as HTMLImageElement).src = '';
	}

	public showAdaptedRobot() {
		const commander = document.getElementById('commander') as HTMLParagraphElement;
		commander.innerText = '';
		const place = document.getElementById('persona') as HTMLImageElement;
		place.src = this.res.getAdaptedRobotRes;
		this.currentCreature = 3;
		(document.getElementById('motion') as HTMLImageElement).src = '';
	}

	// -------------------------- change commander --------------------------------- //

	public changeCommander() {
		const place = document.getElementById('commanderName') as HTMLInputElement;
		this.commander.setName = place.value;
		const name = document.getElementById('currentCommanderName') as HTMLParagraphElement;
		name.innerText = place.value;
	}
}

export default Facade;
