"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ALIVE = 'alive';
exports.DEAD = 'dead';
exports.FEEDING = 'feeding';
exports.ESCAPE = 'escape';
exports.COUNT_OF_PROPERTIES = 6;
exports.CLAWS = 'claws';
exports.FANGS = 'fangs';
exports.SPIT = 'spit';
exports.RUN = 'run';
exports.FLY = 'fly';
exports.SWIM = 'swim';
exports.ARMOR = 'armor';
function createDefaultMovements() {
    let newMovements = new Map();
    newMovements.set(exports.RUN, null);
    newMovements.set(exports.FLY, null);
    newMovements.set(exports.SWIM, null);
    return newMovements;
}
exports.createDefaultMovements = createDefaultMovements;
function createDefaultWeapons() {
    let newWeapons = new Map();
    newWeapons.set(exports.CLAWS, null);
    newWeapons.set(exports.FANGS, null);
    newWeapons.set(exports.SPIT, null);
    return newWeapons;
}
exports.createDefaultWeapons = createDefaultWeapons;
//# sourceMappingURL=constants.js.map