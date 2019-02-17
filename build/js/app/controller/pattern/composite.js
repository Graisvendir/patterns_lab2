"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Composite {
    constructor(_name, _array) {
        this.lastId = 0;
        this.name = _name;
        if (_array) {
            this.creatures = _array;
        }
    }
    get getLastId() {
        return this.lastId;
    }
    get getName() {
        return this.name;
    }
    get getCreatures() {
        return this.creatures;
    }
    show() {
        console.log(this.name + ':');
        for (let i = 0; i < this.creatures.length; i++) {
            console.log('   ' + this.creatures[i].getName + '\n');
        }
    }
    add(_creature) {
        this.creatures.push(_creature);
    }
    del(_creature) {
        this.creatures = this.creatures.filter((_elem) => {
            return _elem != _creature;
        });
    }
}
exports.Composite = Composite;
//# sourceMappingURL=composite.js.map