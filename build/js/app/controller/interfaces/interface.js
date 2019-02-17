"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const iterator_1 = require("./iterator");
function getPropertyFromCreatureByIndex(index, _creature) {
    let iter = new iterator_1.Iterator(_creature);
    while (iter.getCurrent !== index) {
        iter.Next();
    }
    return iter.Current();
}
exports.getPropertyFromCreatureByIndex = getPropertyFromCreatureByIndex;
//# sourceMappingURL=interface.js.map