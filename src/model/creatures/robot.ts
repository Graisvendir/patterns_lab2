import { Movements } from "../properties/movement";


class Robot {

    private _ride  	: Movements.canRide;
    private _name	: string;
    private imgSrc  : string;
    
    constructor(
        _name: string
    ) {
        this._name = _name;
    }

    get getName(): string {
		return this._name;
	}
	
	get getRide(): Movements.canRide {
		return this._ride;
    }

    set ride(value: Movements.canRide) {
        this._ride = value;
    }

    set name(value: string) {
        this._name = value;
    }

    get getImgSrc(): string {
        return this.imgSrc;
    }

    set setImgSrc(_value: string) {
        this.imgSrc = _value;
    }
}

export default Robot;

