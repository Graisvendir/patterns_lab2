import Creature from "../controller/creatures/creature";
import {mainComposite} from '../main'
import Monster from "../controller/creatures/monster";
import { RUN, SWIM, FLY, CLAWS, FANGS, SPIT } from "../constants";

export function addCreature() {
    let inputName = <HTMLInputElement>document.getElementById('name');
    let creatureId = mainComposite.getLastId;
    let newCreature = new Monster(inputName.value, creatureId);
    mainComposite.add(newCreature);
    addNewCreatureToView(newCreature);
}

function addNewCreatureToView(_creature: Creature) {
    let content = document.getElementById('content');
    let run = _creature.getMovements.get(RUN).getValue;
    let swim = _creature.getMovements.get(SWIM).getValue;
    let fly = _creature.getMovements.get(FLY).getValue;
    let claws = _creature.getWeapons.get(CLAWS).getValue;
    let fangs = _creature.getWeapons.get(FANGS).getValue;
    let spit = _creature.getWeapons.get(SPIT).getValue;
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