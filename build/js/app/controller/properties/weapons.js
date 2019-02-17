"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const property_1 = require("./property");
const constants_1 = require("../../constants");
/**
 * abstract class for Weapons
 */
var Weapons;
(function (Weapons) {
    class Weapon extends property_1.Property {
        constructor(_label, _power) {
            super(_label, _power);
        }
        output() {
            if (this.value === 0) {
                return '	i not have ' + this.label;
            }
            else {
                return '	i have ' + this.label + ' with power: ' + this.value;
            }
        }
        ;
    }
    Weapons.Weapon = Weapon;
    // когти
    class Claws extends Weapon {
        constructor(_power = 0) {
            super(constants_1.CLAWS, _power);
        }
    }
    Weapons.Claws = Claws;
    // клыки
    class Fangs extends Weapon {
        constructor(_power = 0) {
            super(constants_1.FANGS, _power);
        }
    }
    Weapons.Fangs = Fangs;
    // плеваться ядом
    class Spit extends Weapon {
        constructor(_power = 0) {
            super(constants_1.SPIT, _power);
        }
    }
    Weapons.Spit = Spit;
})(Weapons = exports.Weapons || (exports.Weapons = {}));
//# sourceMappingURL=weapons.js.map