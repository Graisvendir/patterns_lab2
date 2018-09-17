import { Movements } from './properties/movement';
import { Weapons } from './properties/weapons';
import { Defense } from './properties/defense';
import * as Constants from './constants';

export function addMessage(_message: string): void {
	console.log(_message);
}

export class Monster {
	private movements	: Map<string, Movements.Movement>;
	private weapons		: Map<string, Weapons.Weapon>;
	private armor		: Defense;
	private name		: string;
	private state		: string;

	constructor(
		_name: string = '',
		_movements = Constants.DEFAULT_MOVEMENTS,
		_weapons = Constants.DEFAULT_WEAPONS,
		_defense: Defense = new Defense(Constants.ARMOR, 10)
	) {
		this.name = _name;
		this.movements = _movements;
		this.weapons = _weapons;
		this.armor = _defense;
		this.state = Constants.ALIVE;
	}
    /**
     *  show all properties
     */
    showProperties() {
		console.log(this.name);
		for (let i = 0; i < this.movements.size; i++) {
			this.movements[i].output();
		}
		for (let i = 0; i < this.weapons.size; i++) {
			this.weapons[i].output();
		}
		this.armor.output();
	}

	private upgradeExistingMovement(_movement: Movements.Movement) {
		let value = this.movements.get(_movement.getLabel).getSpeed + _movement.getSpeed;
		_movement.setSpeed = value;
		this.movements.set(_movement.getLabel, _movement);
	}

	updateMovements(_movement: Movements.Movement) {
		if (this.movements.get(_movement.getLabel)) {
			this.movements.set(_movement.getLabel, _movement);
		} else {
			if (_movement)
				this.upgradeExistingMovement(_movement);
		}
	}

	private upgradeExistingWeapon(_weapon: Weapons.Weapon) {
		let value = this.weapons.get(_weapon.getLabel).getPower + _weapon.getPower;
		_weapon.setPower = value;
		this.weapons.set(_weapon.getLabel, _weapon);
	}

	updateWeapons(_weapon: Weapons.Weapon) {
		if (this.weapons.get(_weapon.getLabel)) {
			this.weapons.set(_weapon.getLabel, _weapon);
		} else {
			if (_weapon)
				this.upgradeExistingWeapon(_weapon);
		}
	}

	private upgradeExistingArmor(_armor: Defense) {
		let value = this.armor.getArmor + _armor.getArmor;
		this.armor.setArmor = value;
	}

}
