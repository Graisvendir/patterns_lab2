import * as React from "react";
import Creature from "../creatures/creature";
import { Movements } from "../properties/movement";
import { Weapons } from "../properties/weapons";
import { Defense } from "../properties/defense";
import { Property } from "../properties/property";

function convertToList(_map: Map<string, Property>) {
    let arrayOfValues: Property[] = [];
    _map.forEach(element => {
        arrayOfValues.push(element);    
    });
    
    let list = arrayOfValues.map(
        (key) => {
            if (key)
                return <li> {key.getLabel} value: {key.getValue} </li>;
            else
                return ;
        }
    );
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