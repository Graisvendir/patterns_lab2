import { Defense } from '../properties/defense';
import Creature from '../creatures/creature';
import * as Constants from '../constants';

class Monster extends Creature {
	
	constructor(
		_name: string,
		_movements?,
		_weapons?,
		_defense: Defense = new Defense(Constants.ARMOR, 10)
	){
		super(
			_name,
			_movements,
			_weapons,
			_defense
		);
	}	
}

export default Monster;