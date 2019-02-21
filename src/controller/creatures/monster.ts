import { Movements } from '../properties/movement';
import Creature from '../creatures/creature';
import { generateRandomProperty } from '../properties/randomPropertyGenerator';
import { createDefaultMovements } from '../../constants';

class Monster extends Creature {
	
	constructor(
		_name: string,
	){
		super(_name);
		this.movements = createDefaultMovements();
	}	
}

export default Monster;