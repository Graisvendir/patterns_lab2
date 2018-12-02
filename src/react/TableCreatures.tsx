import * as React from "react";
import Creature from "../creatures/creature";
import { Defense } from "../properties/defense";
import { Movements } from "../properties/movement";
import { Property } from "../properties/property";
import { Weapons } from "../properties/weapons";
import { Composite } from "../interfaces/composite";

function convertToList(_map: Map<string, Property>) {
    let arrayOfValues: Property[] = [];
    _map.forEach(element => {
        arrayOfValues.push(element);    
    });
    
    let list = arrayOfValues.map(
        (key, index) => {
            if (key)
                return <li key={index}> {key.getLabel} value: {key.getValue} </li>;
            else
                return ;
        }
    );
    return list;
}

export class TableCreatures extends React.Component<{creaturesComposite: Composite}, {creaturesComposite: Composite}> {

    constructor(props: any) {
        super(props);
        this.state = {creaturesComposite: this.props.creaturesComposite};
    }

    handleClickDeleteCreature(_creature: Creature) {
		let compose = this.state.creaturesComposite;
        compose.del(_creature);
        console.log("delete");
        this.setState({creaturesComposite: compose});
    }

    renderList() {
        let listCreatures : Creature[] = this.state.creaturesComposite.getCreatures;
        let rendList = listCreatures.map(
            (key, index) => {
                return this.renderOneCreature(key);
            }
        );
        return rendList;
    }
    
    renderOneCreature(_creature: Creature) {
        let name : string                           = _creature.getName;
        let mov  : Map<string, Movements.Movement>  = _creature.getMovements;
        let weap : Map<string, Weapons.Weapon>      = _creature.getWeapons;
        let arm  : Defense                          = _creature.getArmor;
        return (
            <tr>
                <td>
                    {name}
                </td>
                <td>
                    <ul>{convertToList(mov)}</ul>
                </td>
                <td>
                    <ul>{convertToList(weap)}</ul>
                </td>
                <td>
                    {arm.getLabel + ': ' + arm.getValue}
                    <button 
                        type="button" 
                        className="close float-right" 
                        aria-label="Close"
                        onClick={() => this.handleClickDeleteCreature(_creature)}
                    >
                        <span aria-hidden="true">&times;</span>
                    </button>
                </td>
            </tr>
        );
    }

    render() {
        return (
            <div className="row" id="listOfCreatures">
                <table className="table table-bordered">
                    <thead className="thead-dark">
                        <tr>
                            <td>
                                Name
                            </td>
                            <td>
                                Movement
                            </td>
                            <td>
                                Weapon
                            </td>
                            <td>
                                Armor
                            </td>
                        </tr>
                    </thead>
                    <tbody id="tbody">
                        {this.renderList()}
                    </tbody>
                </table>
            </div>
        );
    }
}