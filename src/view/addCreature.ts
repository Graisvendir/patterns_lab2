import Creature from "../controller/creatures/creature";
import {mainComposite} from '../main'
import Monster from "../controller/creatures/monster";
import { RUN, SWIM, FLY} from "../constants";
import { deleteCreature } from "./deleteCreature";

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
    content.innerHTML = content.innerHTML +  
    '<div id="' + _creature.getId + '" class="cell callout" data-closable>' +
        '<button id="del" class="close-button" aria-label="Close alert" type="button" data-close>' +
			'<span aria-hidden="true">&times;</span>' +
		'</button>' +
        '<img class="thumbnail" src="./img/monster.jpg">' +
        '<h5>' + _creature.getName + '</h5>' +
        '<p>Movements:</p>' +
        '<ul>' +
            '<li>Run: ' + run + '</li>' +
            '<li>Fly: ' + fly + '</li>' +
            '<li>Swim: ' + swim + '</li>' +
        '</ul>' +
        '<p><button class="large button" data-open="fightBoard">Fight</button></p>' +
    '</div>';
    let button = <HTMLButtonElement>document.getElementById('del' + _creature.getId);
    button.onclick = deleteCreature;
}