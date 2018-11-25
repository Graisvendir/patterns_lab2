import React from 'react';
import ReactDOM from 'react-dom';

import { TableOfCreatures } from './TableOfCreatures.jsx';
import {Composite} from "../interfaces/composite";
import Monster from "../creatures/monster";

export class App extends React.Component {

	constructor(props) {
		super(props);
        this.state = {
        	creatures: new Composite("Creatures", [])
        };
        this.addCreature = this.addCreature.bind(this);
    }

    addCreature() {
		let creatures = Object.assign({}, this.state.creatures);
		let inputName = document.getElementById('newCreatureName').value;
        creatures.add(new Monster(inputName));
        this.setState({creatures: creatures});
    }

	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="input-group">
						<div className="input-group-prepend">
							<button className="btn btn-outline-primary" onClick={this.addCreature}>Add default creature</button>
						</div>
						<input id="newCreatureName" type="text" className="form-control" />
					</div>				
					
				</div>


				<div className="row" id="listOfCreatures">
					<TableOfCreatures state={this.state} />
				</div>
			</div>
		);
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('root')
);