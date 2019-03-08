
/**
 * abstract class for every property of monster
 */
export abstract class Property {
	protected label: string;
	protected value: number;
	protected imgSrc: string;

	constructor(_label: string, _value: number) {
		this.label = _label;
		this.value = _value;
		this.imgSrc = '';
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

	set setImgSrc(_value: string) {
		this.imgSrc = _value;
	}

	get getImgSrc(): string {
		return this.imgSrc;
	}

	abstract output(): string;
}