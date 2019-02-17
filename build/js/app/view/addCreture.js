"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("../main");
const monster_1 = require("../controller/creatures/monster");
const constants_1 = require("../constants");
function addCreature() {
    let inputName = document.getElementById('name');
    let creatureId = main_1.mainComposite.getLastId;
    let newCreature = new monster_1.default(inputName.value, creatureId);
    main_1.mainComposite.add(newCreature);
    addNewCreatureToView(newCreature);
}
exports.addCreature = addCreature;
function addNewCreatureToView(_creature) {
    let content = document.getElementById('content');
    let run = _creature.getMovements.get(constants_1.RUN).getValue;
    let swim = _creature.getMovements.get(constants_1.SWIM).getValue;
    let fly = _creature.getMovements.get(constants_1.FLY).getValue;
    let claws = _creature.getWeapons.get(constants_1.CLAWS).getValue;
    let fangs = _creature.getWeapons.get(constants_1.FANGS).getValue;
    let spit = _creature.getWeapons.get(constants_1.SPIT).getValue;
    let def = _creature.getArmor.getValue;
    content.innerHTML +=
        '<div id="' + _creature.getId + '"class="cell">' +
            '<img class="thumbnail" src="./images/plaseholder.png">' +
            '<h5>' + _creature.getName + '</h5>' +
            '<p>Movements:</p>' +
            '<ul>' +
            '<li>Run: ' + run + '</li>' +
            '<li>Fly: ' + fly + '</li>' +
            '<li>Swim: ' + swim + '</li>' +
            '</ul>' +
            '<p>Weapons:</p>' +
            '<ul>' +
            '<li>Claws: ' + claws + '</li>' +
            '<li>Fangs: ' + fangs + '</li>' +
            '<li>Spit: ' + spit + '</li>' +
            '</ul>' +
            '<p>Defense: ' + def + '</p>' +
            '<a href="#" class="button small expanded hollow">Buy</a>' +
            '</div>';
}
// шлак
// function getElementByIdOnView(_id: number): HTMLElement {
//     let elem = document.getElementById('content');
//     for (let i = 0; i < elem.childElementCount; i++) {
//         if (_cretureID == i) {
//             let curChild = elem.firstElementChild;
//             return curChild;
//         }
//     }
// }
// function getMonster(_cretureID: number) {
//     let elem = document.getElementById('content');
//     for (let i = 0; i < elem.childElementCount; i++) {
//         if (_cretureID == i) {
//             let curChild = elem.firstElementChild;
//             return curChild;
//         }
//     }
// }
//# sourceMappingURL=addCreture.js.map