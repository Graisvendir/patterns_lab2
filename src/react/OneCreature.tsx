import * as React from "react";
import Creature from "../creatures/creature";
import { Movements } from "../properties/movement";
import { Weapons } from "../properties/weapons";
import { Defense } from "../properties/defense";
import {Property} from "../properties/property";
import {Composite} from "../interfaces/composite";

function convertToList(_map: Map<string, Property>) {
    let list: any;
    for (let key of _map.values()) {
        if (key)
            list += <li> {key.getLabel + ': ' + key.getValue} </li>;
    }
    return list;
}

export class OneCreature extends React.Component<{creature: Creature}, {}> {
    private creature: Creature;
    private name: string;
    private mov: Map<string, Movements.Movement>;
    private weap: Map<string, Weapons.Weapon>;
    private arm: Defense;

    constructor(props: any) {
        super(props);
        this.creature = props.creature;
        this.name = this.creature.getName;
        this.mov = this.creature.getMovements;
        this.weap = this.creature.getWeapons;
        this.arm = this.creature.getArmor;
    }

    render() {
        return (
            <tr>
                <td>
                    {this.name}
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