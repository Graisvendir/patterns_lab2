import React from 'react';
import { OneCreature } from "./OneCreature.jsx";
/*

function renderListOfCreatures(props) {
    const map = props.creatures;
    const listItems =
        map.keys().map((key) => {


            return(
                <tr>

                </tr>
            );
        });
    return listItems;
}*/

export class TableOfCreatures extends React.Component {

    constructor(props) {
        super(props);
        this.state = props.state;
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
                    {this.state.creatures.getCreatures.map(
                        (key) => {
                            <OneCreature creature={key}/>
                        }
                    )}
                </tbody>
            </table>
        );
    }
}