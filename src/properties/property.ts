
/**
 * abstract class for every property of monster
 */
export abstract class Property {
	protected label: string;
	protected value: number;
	constructor(_label: string, _value: number) {
		this.label = _label;
		this.value = _value;
	}
	get getLabel(): string {
		return this.label;
	}
	set setLabel(_label: string) {
		this.label = _label;
	}
	get getValue(): number {
		return this.value;
	}
	set setValue(_value: number) {
		this.value = _value;
	}
	abstract output(): string;
}