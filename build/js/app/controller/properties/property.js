"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * abstract class for every property of monster
 */
class Property {
    constructor(_label, _value) {
        this.label = _label;
        this.value = _value;
    }
    get getLabel() {
        return this.label;
    }
    set setLabel(_label) {
        this.label = _label;
    }
    get getValue() {
        return this.value;
    }
    set setValue(_value) {
        this.value = _value;
    }
}
exports.Property = Property;
//# sourceMappingURL=property.js.map