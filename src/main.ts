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
    /**
     *  show all properties
     */
    showProperties() {
		console.log(
			this.name,
			this.movements,
			this.weapons,
			this.armor,
			this.state
		);
	}

    setMovement(_index: number, _speed: number) {
        this.movements[_index].setSpeed = _speed;
    }
    setWeapon(_index: number, _power: number) {
        this.weapons[_index].setPower = _power;
    }

    /**
    *   search property with @prop name
    *   @param { Array<Property> } _properties array of properties
    *   @param { string } prop searched property
    *   @returns { boolean } true, if array have this property
    */
	private checkProperty(_properties: Array<Property>, prop: string) {
		for (let i = 0; i < _properties.length; i++){
			if (prop === _properties[i].getLabel)
				return true;
		}
		return false;
	}

	public updateProperty(
		_properties: Array<Constants.PROPERTY>,
		_movement: Constants.PROPERTY
	) {
		for (let i = 0; i < _properties.length; i++){
			if (_movement.getLabel === _properties[i].getLabel) {
                console.log(typeof(_movement));
                /*switch (typeof(_movement)) {
                    case Constants.Movement:
                        this.setMovement(i, _movement.getSpeed);
                }*/
			}
		}
	}

	private addMovement(_movement: Movements.Movement) {
		this.movements.push(_movement);
		addMessage(
			this.name +
			' have new movement: ' +
			_movement.getLabel
		);
	}

	public addMovementProxy(_movement: Movements.Movement) {
		if (this.checkProperty(this.movements, _movement.getLabel)) {

        }

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
