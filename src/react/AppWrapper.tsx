import * as React from "react";
import * as ReactDOM from 'react-dom';
import Grid from '@material-ui/core/Grid/Grid'
import Input from "@material-ui/core/Input/Input";
import Button from "@material-ui/core/Button/Button";
import {TableCreatures} from "./TableCreatures";
import Monster from "../creatures/monster";
import {Composite} from "../interfaces/composite";

class AppWrapper extends React.Component<{}, {creatures: Composite}> {

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
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
                spacing={16}
            >
                <Grid
                    container
                    alignItems="flex-end"
                >
                    <Grid item xs={6}>
                        <Input/>
                    </Grid>
                    <Grid item xs={6}>
                        <Button size="large" onClick={this.handleClickAddCreature}> Add Creature </Button>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <TableCreatures creaturesComposite={this.state.creatures}></TableCreatures>
                </Grid>
            </Grid>
        );
    }
}

export default AppWrapper;