"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class abstractIterator {
}
/**
 * iterator for Creature properties
 */
class Iterator extends abstractIterator {
    constructor(_creature) {
        super();
        this.array = [];
        this.current = 0;
        for (let key of _creature.getMovements.values()) {
            if (key) {
                this.array.push(key);
            }
        }
        for (let key of _creature.getWeapons.values()) {
            if (key) {
                this.array.push(key);
            }
        }
        this.array.push(_creature.getArmor);
    }
    get getCurrent() {
        return this.current;
    }
    First() {
        return this.array[0];
    }
    End() {
        if (this.array.length) {
            return this.array[this.array.length - 1];
        }
        return null;
    }
    Next() {
        if (this.current < this.array.length - 1) {
            this.current++;
        }
        return this.array[this.current];
    }
    Current() {
        return this.array[this.current];
    }
}
exports.Iterator = Iterator;
//# sourceMappingURL=iterator.js.map