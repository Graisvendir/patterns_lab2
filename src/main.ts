import * as Movement from './movement';

function addMessage(_message: string): void {
	document.getElementById('root')!.innerHTML += _message;
}

class Monster {
	private movements : Array<Movement.IMovement>;
	private name: string;

	constructor(_name: string) {
		this.name = _name;
		this.movements = [];
	}

	showProperties() {
		let listProperties = '<p>' + this.name + ':</p><ul>';
		for (let i = 0; i < this.movements.length; i++)
			listProperties += '<li>' + this.movements[i].move() + '</li>';
		addMessage(listProperties);
	}

	addMovement(_movement: Movement.IMovement) {
		this.movements.push(_movement);
		addMessage(
			'<p>' + this.name + 
			' have new movement: ' +
			_movement.label +
			'</p>'
		);
	}
}


let newMonster = new Monster('Jack');
newMonster.addMovement(new Movement.canRun(10));
newMonster.addMovement(new Movement.canFly(100));
newMonster.showProperties();
