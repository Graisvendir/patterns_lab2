import Creature from '../creatures/creature';
import Monster from '../creatures/monster';
import { Property } from '../properties/property'

export function getPropertyFromCreatureByIndex(index: number, _creature: Creature): Property {
    let i = 0;
    if (index < _creature.getMovements.size) {
        for (let key of _creature.getMovements.values()) {
            if (key !== null) {
                if (i === index)
                    return key;
                else
                    i++;
            }
        }
    }
    index -= i;
    i = 0;
    if (index < _creature.getWeapons.size) {
        let i = 0;
        for (let key of _creature.getWeapons.values()) {
            if (key !== null) {
                if (i === index)
                    return key;
                else
                    i++;
            }
        }
    }
    return _creature.getArmor;
}

let creatureArray = [];

function addCell(
    _cell: string, 
    _place: HTMLElement,
    _option?: number
    ) {
        if (_option)
            _place.innerHTML += '<td>' + _cell + ' : ' + _option + '</td>';
        else
        _place.innerHTML += '<td>' + _cell + '</td>';
}


export function addCreature(_creature: Creature) {
    //let name = document.getElementById('newCreatureName').value;
    creatureArray.push(new Monster());
    let table = document.getElementById('tbody');
    table.innerHTML += '<tr>';
    addCell(_creature.getName, table);
    for (let key of _creature.getMovements.values()) {
        if (key) {
            addCell(key.getLabel, table, key.getValue);
        }
    }
    for (let key of _creature.getWeapons.values()) {
        if (key) {
            addCell(key.getLabel, table, key.getValue);
        }
    }
    addCell(_creature.getArmor.getLabel, table, _creature.getArmor.getValue);
}