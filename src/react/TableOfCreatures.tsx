import * as React from "react";
import { OneCreature } from "./OneCreature";
import { Composite } from "../interfaces/composite";
import Creature from "../creatures/creature";

export class TableOfCreatures extends React.Component<{creatures: Composite}, {creatures: Composite}> {

    constructor(props: any) {
        super(props);
        this.state = {creatures: props.creatures};
        this.renderList = this.renderList.bind(this);
    }

    renderList() {
        let listCreatures : Creature[] = this.state.creatures.getCreatures;
        let rendList = listCreatures.map(
            (key, index) => {
                return <OneCreature key={index} creature={key}/>
            }
        );
        return rendList;
    }

    render() {
        return (
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
        );
    }
}