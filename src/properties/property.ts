
/**
 * abstract class for every property of monster
 */
export abstract class Property {
    protected label: string;
	constructor(_label: string) {
		this.label = _label;
	}
	get getLabel(): string {
		return this.label;
	}
	set setLabel(_label: string) {
		this.label = _label;
	}
	abstract output(): string;
}