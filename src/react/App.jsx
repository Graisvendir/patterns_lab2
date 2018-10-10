import React from 'react';
import ReactDOM from 'react-dom';

import { ListOfCreatures } from './ListOfCreatures.jsx';
import {Composite} from "../interfaces/composite";
import Creature from "../creatures/creature";
import Monster from "../creatures/monster";

export class App extends React.Component {

	constructor(props) {
		super(props);
        this.state = {
        	creatures: new Composite("Creatures", [])
        };
    }

    addCell(
        _cell,
        _place,
        _option
    ) {
        if (_option)
            _place.innerHTML += '<td>' + _cell + ' : ' + _option + '</td>';
        else
            _place.innerHTML += '<td>' + _cell + '</td>';
    }


    addCreature(_creature) {
		let creatures = this.state.creatures.assign();
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
					<ListOfCreatures state={this.state} />
				</div>
			</div>
		);
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('root')
);