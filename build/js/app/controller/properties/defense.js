"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const property_1 = require("./property");
const constants_1 = require("../../constants");
class Defense extends property_1.Property {
    constructor(_armor = 0) {
        super(constants_1.ARMOR, _armor);
    }
    output() {
        if (this.value === 0) {
            return '    i not have ' + this.label;
        }
        else {
            return '    i have ' + this.label + ' with amout: ' + this.value;
        }
    }
}
exports.Defense = Defense;
//# sourceMappingURL=defense.js.map