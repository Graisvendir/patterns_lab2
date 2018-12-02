import * as React from "react";
import * as ReactDOM from 'react-dom';

import { Composite } from "../interfaces/composite";
import Monster from "../creatures/monster";
import { TableCreatures } from "./TableCreatures";


export class App extends React.Component<{}, {creatures: Composite}> {

	constructor(props: any) {
		super(props);
        this.state = {creatures: new Composite("Creatures", [])};
		this.handleClickAddCreature = this.handleClickAddCreature.bind(this);
    }

    handleClickAddCreature() {
		let creatures = this.state.creatures;
		let inputName = (document.getElementById('newCreatureName') as HTMLInputElement).value;
        creatures.add(new Monster(inputName));
        this.setState({creatures: creatures});
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
				<TableCreatures creaturesComposite={this.state.creatures} />				
			</div>
		);
	}
}

ReactDOM.render(
	<App/>,
	document.getElementById('root')
);