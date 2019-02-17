"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const defense_1 = require("../properties/defense");
const creature_1 = require("../creatures/creature");
const randomPropertyGenerator_1 = require("../properties/randomPropertyGenerator");
class Monster extends creature_1.default {
    constructor(_name, _id, _movements, _weapons, _defense = new defense_1.Defense(10)) {
        super(_name, _id, _movements, _weapons, _defense);
        this.updateSomeProperty(randomPropertyGenerator_1.generateRandomProperty());
    }
}
exports.default = Monster;
//# sourceMappingURL=monster.js.map