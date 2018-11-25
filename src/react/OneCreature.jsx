import React from 'react';

function convertToList(_map) {
    let list;
    for (let key of _map.value()) {
        list += <li> {key.getLabel + ': ' + key.getValue} </li>;
    }
    return list;
}

export class OneCreature extends React.Component {
    constructor(props) {
        super(props);
        this.creature = props.creature;
        this.name = this.creature.getLabel;
        this.mov = this.creature.getMovements;
        this.weap = this.creature.getWeapons;
        this.arm = this.creature.getArmor;
    }

    render() {
        return (
            <tr>
                <td>
                    {this.getName}
                </td>
                <td>
                    <ul>{convertToList(this.mov)}</ul>
                </td>
                <td>
                    <ul>{convertToList(this.weap)}</ul>
                </td>
                <td>
                    <ul>{this.arm.getLabel + ': ' + this.arm.getValue}</ul>
                </td>
            </tr>
        );
    }
}