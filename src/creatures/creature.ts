import { Movements } from '../properties/movement';
import { Weapons } from '../properties/weapons';
import { Defense } from '../properties/defense';
import * as Constants from '../constants';
import { Property } from '../properties/property';
import * as Interface from '../interfaces/interface';

abstract class Creature {
    protected movements					: Map<string, Movements.Movement>;
	protected weapons					: Map<string, Weapons.Weapon>;
	protected armor						: Defense;
	protected name						: string;
	protected Status					: string;
	protected countOfNotNullProperties	: number = 1;

	constructor(
		_name: string,
		_movements?: Map<string, Movements.Movement>,
		_weapons?: Map<string, Weapons.Weapon>,
		_armor: Defense = new Defense(Constants.ARMOR, 10)
	) {
		this.name = _name;
		if (_movements === undefined) {
			this.setDefaultMovements();
		} else {
			this.movements = _movements;
			for (let key of this.movements.values()) {
				if (key !== null) {
					this.countOfNotNullProperties++;
				}
			}
		}

		if (_weapons === undefined) {
			this.setDefaultWeapons();
		} else {
			this.weapons = _weapons;
			for (let key of this.weapons.values()) {
				if (key !== null) {
					this.countOfNotNullProperties++;
				}
			}
		}
		this.armor = _armor;
		this.iAlive();
    }
	
	//--------------------------Getters-----------------------------//
    get getName(): string {
        return this.name;
	}
	
	get getMovements(): Map<string, Movements.Movement> {
		return this.movements;
	}

	get getWeapons(): Map<string, Weapons.Weapon>{
		return this.weapons;
	}

	get getArmor(): Defense {
		return this.armor;
	}

	get getStatus(): string {
		return this.Status;
	}

	get getCountOfNotNullProps() : number {
		return this.countOfNotNullProperties;
	}
	//---------------------------Setters-------------------------------//

	setDefaultMovements() { 
		this.movements = Constants.createDefaultMovements();
	}

	setDefaultWeapons() { 
		this.weapons = Constants.createDefaultWeapons();
	}

	//----------------------------Show Properties----------------------//
	public showProp(_prop: Property) {
		if (_prop !== null) {
			console.log(_prop.output());
		}
	}
	
	public showProperties() {
		Constants.addMessage(this.name + ' properties:');
		for (let key of this.movements.values()) {
			this.showProp(key);
		}
		for (let key of this.weapons.values()) {
			this.showProp(key);
		}
		this.showProp(this.armor);
    }
    
    showStatus() {
		Constants.addMessage(this.name + ' is ' + this.Status);
    }
	
	//-------------Summ of properties---------------//
	complexWeapon(): number {
		let attack = 0;
		for (let key of this.weapons.values()) {
			if (key)
				attack += key.getValue;
		}
		return attack;
	}

	complexSpeed(): number {
		let speed = 0;
		for (let key of this.movements.values()) {
			if (key)	
				speed += key.getValue;
		}
		return speed;
    }
    
    complexArmor(): number {
        return this.armor.getValue;
    }

    //---------------Change Status--------------------//
    iAlive() {
		this.Status = Constants.ALIVE;
		this.showStatus();
	}

	iDead() {
		this.Status = Constants.DEAD;
		this.showStatus();
	}

	iFeeding() {
		this.Status = Constants.FEEDING;
		this.showStatus();
	}

	iEscape() {
		this.Status = Constants.ESCAPE;
		this.showStatus();
    }
    
    //------------------Upgrade Properties--------------------//
    
    private upgradeExistingMovement(_movement: Movements.Movement) {
		let value = this.movements.get(_movement.getLabel).getValue + _movement.getValue;
		_movement.setValue = value;
		this.movements.set(_movement.getLabel, _movement);
	}

	updateMovements(_movement: Movements.Movement) {
		if (this.movements.get(_movement.getLabel) === null) {
			this.movements.set(_movement.getLabel, _movement);
			this.countOfNotNullProperties++;
		} else {
			if (_movement)
				this.upgradeExistingMovement(_movement);
		}
	}

	private upgradeExistingWeapon(_weapon: Weapons.Weapon) {
		let value = this.weapons.get(_weapon.getLabel).getValue + _weapon.getValue;
		_weapon.setValue = value;
		this.weapons.set(_weapon.getLabel, _weapon);
	}

	updateWeapons(_weapon: Weapons.Weapon) {
		if (this.weapons.get(_weapon.getLabel) === null) {
			this.weapons.set(_weapon.getLabel, _weapon);
			this.countOfNotNullProperties++;
		} else {
			if (_weapon)
				this.upgradeExistingWeapon(_weapon);
		}
	}

	updateArmor(_armor: Defense) {
		let value = this.armor.getValue + _armor.getValue;
		this.armor.setValue = value;
	}

	//-------------------------Take Property From Target------------------------//
	/**
	 * search property with number _cycle.random
	 * @param _cycle { {number, number} } have random number and iterator
	 * @param _mapProps { Map<string, Property> } have map of creature props
	 */
	private updateSomeProperty(_property: Property) {
		switch (_property.getLabel) {
			case Constants.RUN:
				this.updateMovements(_property);
				break;
			case Constants.FLY:
				this.updateMovements(_property);
				break;
			case Constants.SWIM:
				this.updateMovements(_property);
				break;
			case Constants.CLAWS:
				this.updateWeapons(_property);
				break;
			case Constants.FANGS:
				this.updateWeapons(_property);
				break;
			case Constants.SPIT:
				this.updateWeapons(_property);
				break;
		}
		
	}
	
	/**
	 * take property after battle
	 * @param _creature { Creature } 
	 */
	takePropertyFrom(_creature: Creature): boolean {
		let date = Math.random();
		let count = _creature.getCountOfNotNullProps;
		
		let random = Math.round((date * 1000) % count);
		console.log(random);
		let updProp = Interface.getPropertyFromCreatureByIndex(random, _creature);
		this.updateSomeProperty(updProp);
		console.log('	' + this.name + ' take property: ' +  updProp.getLabel);
		return true;
	}
}

export default Creature;