import { Movements } from "../properties/movement";


class Robot {

    private ride  	: Movements.canRide;
    private name	: string;
    private imgSrc  : string;
    
    constructor(
        _name: string
    ) {
        this.name = _name;
    }

    get getName(): string {
		return this.name;
	}
	
	get getRide(): Movements.canRide {
		return this.ride;
    }

    set setRide(_value: Movements.canRide) {
        this.ride = _value;
    }

    set setName(_value: string) {
        this.name = _value;
    }

    get getImgSrc(): string {
        return this.imgSrc;
    }

    set setImgSrc(_value: string) {
        this.imgSrc = _value;
    }
}

export default Robot;

