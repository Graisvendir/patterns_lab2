import Creature from '../creatures/creature';
import { facade } from '../../main';

class Monster extends Creature {

	constructor(
		_name: string
	){
		super(_name);
	}

    show() {
        facade.showMonster();
	}
}

export default Monster;