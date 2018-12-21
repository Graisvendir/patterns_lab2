import * as React from "react";
import Grid from '@material-ui/core/Grid/Grid'
import Input from "@material-ui/core/Input/Input";
import Button from "@material-ui/core/Button/Button";
import TableCreatures from "./TableCreatures";
import Monster from "../creatures/monster";
import {Composite} from "../interfaces/composite";

const styles = () => ({
    input: {
        width: '40%'
    }
});

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
                    justify="center"
                    spacing={16}
                >
                    <Grid item>
                        <Input id={"newCreatureName"}/>
                    </Grid>
                    <Grid item>
                        <Button 
                            color="primary" 
                            size="large" 
                            onClick={this.handleClickAddCreature}
                        > 
                            Add Creature 
                        </Button>
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