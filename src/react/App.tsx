import * as React from "react";
import * as ReactDOM from 'react-dom';

import { TableOfCreatures } from './TableOfCreatures';
import { Composite } from "../interfaces/composite";
import Monster from "../creatures/monster";

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

    componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{ creatures: Composite }>, snapshot?: any): void {
		console.log('update!');
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
					<TableOfCreatures creatures={this.state.creatures} />
				</div>
			</div>
		);
	}
}

ReactDOM.render(
	<App/>,
	document.getElementById('root')
);