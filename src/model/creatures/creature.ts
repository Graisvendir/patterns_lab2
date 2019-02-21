import { Movements } from '../properties/movement';
import * as Constants from '../../constants';

abstract class Creature {
	protected movements					: Map<string, Movements.Movement>;
	protected name						: string;

	constructor(
		_name: string
	) {
		this.name = _name;
	}
	

	get getName(): string {
		return this.name;
	}
	
	get getRunSpeed(): number {
		return this.movements.get(Constants.RUN).getValue;
	}

	get getMovements(): Map<string, Movements.Movement> {
		return this.movements;
	}

	show

}

export default Creature;