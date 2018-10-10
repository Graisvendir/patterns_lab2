import React from 'react';
import ReactDOM from 'react-dom';

export class ListOfCreatures extends React.Component {

    constructor(props) {
        super(props);
        this.state = props.state;
    }

    convertToList(_map) {
        let list;
        for (let key of _map.value()) {
            list += <li> {key.getLabel + ': ' + key.getValue} </li>;
        }
        return list;
    }

    renderListOfCreatures() {
        return this.state.creatures.map((key) => {
            let mov = key.getMovements;
            let weap = key.getWeapons;
            let arm = key.getArmor;

            return (
                <tr>
                    <td>
                        {key.getName}
                    </td>
                    <td>
                        <ul>{this.convertToList(mov)}</ul>
                    </td>
                    <td>
                        <ul>{this.convertToList(weap)}</ul>
                    </td>
                    <td>
                        <ul>{this.convertToList(arm)}</ul>
                    </td>
                </tr>
            );
        });
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
                    {this.renderListOfCreatures}
                </tbody>
            </table>
        );
    }
}