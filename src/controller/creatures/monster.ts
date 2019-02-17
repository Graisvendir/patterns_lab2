import { Defense } from '../properties/defense';
import { Movements } from '../properties/movement';
import { Weapons } from '../properties/weapons';
import Creature from '../creatures/creature';
import { generateRandomProperty } from '../properties/randomPropertyGenerator';

class Monster extends Creature {
	
	constructor(
		_name: string,
		_id: number,
		_movements?: Map<string, Movements.Movement>,
		_weapons?: Map<string, Weapons.Weapon>,
		_defense: Defense = new Defense(10)
	){
		super(
			_name,
			_id,
			_movements,
			_weapons,
			_defense,
		);
		this.updateSomeProperty(generateRandomProperty());
	}	
}

export default Monster;