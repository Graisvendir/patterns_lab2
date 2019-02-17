"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const defense_1 = require("./defense");
const movement_1 = require("./movement");
const weapons_1 = require("./weapons");
function generateRandomProperty() {
    let randomProp = Math.round(Math.random() * 10);
    let randomValue = Math.round(Math.random() * 100);
    randomProp %= 6;
    switch (randomProp) {
        case 0:
            return new movement_1.Movements.canFly(randomValue);
        case 1:
            return new movement_1.Movements.canRun(randomValue);
        case 2:
            return new movement_1.Movements.canSwim(randomValue);
        case 3:
            return new weapons_1.Weapons.Claws(randomValue);
        case 4:
            return new weapons_1.Weapons.Fangs(randomValue);
        case 5:
            return new weapons_1.Weapons.Spit(randomValue);
        default:
            return new defense_1.Defense(randomValue);
    }
}
exports.generateRandomProperty = generateRandomProperty;
//# sourceMappingURL=randomPropertyGenerator.js.map