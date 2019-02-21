import { Movements } from '../properties/movement';
import * as Constants from '../../constants';
import { Property } from '../properties/property';
import { Iterator } from '../interfaces/iterator';

abstract class Creature {
	protected movements					: Map<string, Movements.Movement>;
	protected name						: string;

	constructor(
		_name: string
	) {
		this.name = _name;
	}
	
	//--------------------------Getters-----------------------------//
	get getName(): string {
		return this.name;
	}
	
	get getMovements(): Map<string, Movements.Movement> {
		return this.movements;
	}

	//---------------------------Setters-------------------------------//
	// need for construct default creature
	/**
	 * create movements of creature then it's construct
	 */
	setDefaultMovements() { 
		this.movements = Constants.createDefaultMovements();
	}

	//----------------------------Show Properties----------------------//
	public showProp(_prop: Property) {
		if (_prop !== null) {
			console.log(_prop.output());
		}
	}

	//-------------Summ of properties---------------//
	complexSpeed(): number {
		let speed = 0;
		for (let key of this.movements.values()) {
			if (key)	
				speed += key.getValue;
		}
		return speed;
	}

}

export default Creature;