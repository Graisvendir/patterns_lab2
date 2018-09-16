import { Movements } from './properties/movement';
import { Weapons } from './properties/weapons';
import { Defense } from './properties/defense';
import { Property } from "./properties/property";
import * as Constants from './constants';

export function addMessage(_message: string): void {
	console.log(_message);
}

export class Monster {
	private movements	: Array<Movements.Movement>;
	private weapons		: Array<Weapons.Weapon>;
	private armor		: Defense;
	private name		: string;
	private state		: string;

	constructor(
		_name: string = '', 
		_movements: Array<Movements.Movement> = [], 
		_weapons: Array<Weapons.Weapon> = [],
		_defense: Defense = new Defense(Constants.ARMOR, 10)
	) {
		this.name = _name;
		this.movements = _movements;
		this.weapons = _weapons;
		this.armor = _defense;
		this.state = Constants.ALIVE;
	}

	private checkProperty(_properties: Array<Property>, prop: string) {
		for (let i = 0; i < _properties.length; i++){
			if (prop === _properties[i].getLabel)
				return true;
		}
		return false;
	}

	private updateProperty(
		_properties: Array<Property>, 
		_movement: Movements.Movement
	) {
		for (let i = 0; i < _properties.length; i++){
			if (_movement.getLabel === _properties[i].getLabel) {
			}
		}
		return false;
	}

	showProperties() {
		console.log(
			this.name, 
			this.movements, 
			this.weapons, 
			this.armor, 
			this.state
		);
	}

	private addMovement(_movement: Movements.Movement) {
		this.movements.push(_movement);
		addMessage(
			this.name + 
			' have new movement: ' +
			_movement.getLabel
		);
	}

	updateMovementsByP(_movement: Movements.Movement) {
		if (this.checkProperty(this.movements, _movement.getLabel))

	}

	addWeapon(_weapon: Weapons.Weapon) {
		this.weapons.push(_weapon);
		addMessage(
			this.name + 
			' have new movement: ' +
			_weapon.getLabel
		);
	}

	addArmor(_weapon: Weapons.Weapon) {
		this.weapons.push(_weapon);
		addMessage(
			this.name + 
			' have new movement: ' +
			_weapon.getLabel
		);
	}
}
