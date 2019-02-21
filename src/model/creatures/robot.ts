import { Movements } from "../properties/movement";


class Robot {

    private ride  	: Movements.canRide;
    private name	: string;
    
    constructor(
        _name: string,
        _rideValue?: number
    ) {
        this.name = _name;
        this.ride = new Movements.canRide(0);
        if (_rideValue) {
            this.ride.setValue = _rideValue;
        }
    }

    get getName(): string {
		return this.name;
	}
	
	get getRide(): Movements.canRide {
		return this.ride;
    }
}

export default Robot;

