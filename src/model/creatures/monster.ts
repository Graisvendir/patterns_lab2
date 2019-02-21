import Creature from '../creatures/creature';
import { createDefaultMovements } from '../../constants';

class Monster extends Creature {
	
	constructor(
		_name: string
	){
		super(_name);
	}	

	setDefaultMovements() {
		this.movements = createDefaultMovements();
	}
}

export default Monster;