import Creature from '../creatures/creature';

class Monster extends Creature {

	private imgSrc: string;

	constructor(
		_name: string
	){
		super(_name);
	}

    set setImgSrc(_value: string) {
        this.imgSrc = _value;
    }

    get getImgSrc(): string {
        return this.imgSrc;
    }

    show() {
        let place = <HTMLImageElement>document.getElementById('persona');
        place.src = '/img/monster.jpg';
	}
}

export default Monster;