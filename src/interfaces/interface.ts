import Creature from '../creatures/creature';

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

function addCreature(_creature: Creature) {
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