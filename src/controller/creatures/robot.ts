import { Movements } from "../properties/movement";


class Robot {

    private ride  	: Movements.canRide;
    private name	: string;
    
    constructor(
        _name: string,
        _ride: Movements.canRide = new Movements.canRide(10)
    ) {
        this.name = _name;
        this.ride = _ride;
    }

    get getName(): string {
		return this.name;
	}
	
	get getMovements(): Movements.canRide {
		return this.ride;
	}
}

export default Robot;

