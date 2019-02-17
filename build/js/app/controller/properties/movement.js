"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const property_1 = require("./property");
const constants_1 = require("../../constants");
var Movements;
(function (Movements) {
    /**
     * abstract class for movements, extends from Property
     */
    class Movement extends property_1.Property {
        constructor(_label, _speed) {
            super(_label, _speed);
        }
        output() {
            if (this.value === 0) {
                return '	i cant ' + this.label;
            }
            else {
                return '	i can ' + this.label + ' with speed: ' + this.value;
            }
        }
        ;
    }
    Movements.Movement = Movement;
    /**
     * move classes
     */
    class canRun extends Movement {
        constructor(_speed = 0) {
            super(constants_1.RUN, _speed);
        }
    }
    Movements.canRun = canRun;
    class canFly extends Movement {
        constructor(_speed = 0) {
            super(constants_1.FLY, _speed);
        }
    }
    Movements.canFly = canFly;
    class canSwim extends Movement {
        constructor(_speed = 0) {
            super(constants_1.SWIM, _speed);
        }
    }
    Movements.canSwim = canSwim;
})(Movements = exports.Movements || (exports.Movements = {}));
//# sourceMappingURL=movement.js.map