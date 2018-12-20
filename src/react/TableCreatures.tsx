import * as React from "react";
import Creature from "../creatures/creature";
import { Defense } from "../properties/defense";
import { Movements } from "../properties/movement";
import { Property } from "../properties/property";
import { Weapons } from "../properties/weapons";
import { Composite } from "../interfaces/composite";
import Table from "@material-ui/core/Table/Table";
import TableHead from "@material-ui/core/TableHead/TableHead";
import TableRow from "@material-ui/core/TableRow/TableRow";
import TableCell from "@material-ui/core/TableCell/TableCell";
import TableBody from "@material-ui/core/TableBody/TableBody";

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
                return this.renderOneCreature(key, index);
            }
        );
        return rendList;
    }
    
    renderOneCreature(_creature: Creature, _index: number) {
        let name : string                           = _creature.getName;
        let mov  : Map<string, Movements.Movement>  = _creature.getMovements;
        let weap : Map<string, Weapons.Weapon>      = _creature.getWeapons;
        let arm  : Defense                          = _creature.getArmor;
        return (
            <TableRow key={_index}>
                <TableCell>
                    {name}
                </TableCell>
                <TableCell>
                    <ul>{convertToList(mov)}</ul>
                </TableCell>
                <TableCell>
                    <ul>{convertToList(weap)}</ul>
                </TableCell>
                <TableCell>
                    {arm.getLabel + ': ' + arm.getValue}
                    <button 
                        type="button" 
                        className="close float-right" 
                        aria-label="Close"
                        onClick={() => this.handleClickDeleteCreature(_creature)}
                    >
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <div className="dropdown">
                        <button 
                            className="btn btn-secondary dropdown-toggle" 
                            type="button" id="dropdownMenuButton" 
                            data-toggle="dropdown" 
                            aria-haspopup="true" 
                            aria-expanded="false"
                        >
                            <span className="io io-ellipses" title="ellipses" aria-hidden="true" />
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </div>
                </TableCell>
            </TableRow>
        );
    }

    render() {
        return (

            <Table className="table table-bordered">
                <TableHead>
                    <TableRow>
                        <TableCell>
                            Name
                        </TableCell>
                        <TableCell>
                            Movement
                        </TableCell>
                        <TableCell>
                            Weapon
                        </TableCell>
                        <TableCell>
                            Armor
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {this.renderList()}
                </TableBody>
            </Table>
        );
    }
}