import * as React from "react";
import * as ReactDOM from 'react-dom';

import { Composite } from "../interfaces/composite";
import Monster from "../creatures/monster";
import Creature from "../creatures/creature";
import { OneCreature } from "./OneCreature";


export class App extends React.Component<{}, {creatures: Composite}> {

	constructor(props: any) {
		super(props);
        this.state = {creatures: new Composite("Creatures", [])};
		this.handleClickAddCreature = this.handleClickAddCreature.bind(this);
		this.renderList = this.renderList.bind(this);
		this.handleClickDeleteCreature = this.handleClickDeleteCreature.bind(this);
    }

    handleClickAddCreature() {
		let creatures = this.state.creatures;
		let inputName = (document.getElementById('newCreatureName') as HTMLInputElement).value;
        creatures.add(new Monster(inputName));
        this.setState({creatures: creatures});
    }

	handleClickDeleteCreature(_creature: Creature) {
		let creatures = this.state.creatures;
		creatures.del(_creature);
		console.log("delete");
		this.setState({creatures: creatures});
	}

	renderList() {
        let listCreatures : Creature[] = this.state.creatures.getCreatures;
        let rendList = listCreatures.map(
            (key, index) => {
                return <OneCreature delCreature={this.handleClickDeleteCreature} key={index} creature={key}/>
            }
        );
        return rendList;
	}
	
    render() {
		return (
			<div className="container">
				<div className="row">
					<div className="input-group">
						<div className="input-group-prepend">
							<button
                                className="btn btn-outline-primary"
                                onClick={this.handleClickAddCreature}
                            >Add default creature</button>
						</div>
						<input id="newCreatureName" type="text" className="form-control" />
					</div>
				</div>


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
			</div>
		);
	}
}

ReactDOM.render(
	<App/>,
	document.getElementById('root')
);