import * as React from "react";
import Creature from "../creatures/creature";
import { Defense } from "../properties/defense";
import { Movements } from "../properties/movement";
import { Property } from "../properties/property";
import { Weapons } from "../properties/weapons";
import { Composite } from "../interfaces/composite";
import Button from "@material-ui/core/Button/Button";
import Table from "@material-ui/core/Table/Table";
import TableHead from "@material-ui/core/TableHead/TableHead";
import TableRow from "@material-ui/core/TableRow/TableRow";
import TableCell from "@material-ui/core/TableCell/TableCell";
import TableBody from "@material-ui/core/TableBody/TableBody";
import { withStyles, Theme } from "@material-ui/core";
import List from "@material-ui/core/List/List";
import ListItem from "@material-ui/core/ListItem/ListItem";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import Typography from "@material-ui/core/Typography/Typography";

function convertToList(_map: Map<string, Property>) {
    let arrayOfValues: Property[] = [];
    _map.forEach(element => {
        arrayOfValues.push(element);    
    });
    
    let list = arrayOfValues.map(
        (key, index) => {
            if (key)
                return (
                    <ListItem button key={index}> 
                        
                        <ListItemText primary={key.getLabel + ' value: ' + key.getValue} />
                    </ListItem>
                );
            else
                return ;
        }
    );
    return list;
}

interface Props {
    creaturesComposite: Composite;
    classes: {
        root: string;
    }
}

interface State {
    creaturesComposite: Composite;
}

const styles = (theme: Theme) => ({
    root: {
        minWidth: '70%'
    }
});

class TableCreatures extends React.Component<Props, State> {

    private classes = {};
    constructor(props: any) {
        super(props);
        this.classes = this.props;
        this.state = {creaturesComposite: this.props.creaturesComposite};
    }

    handleClickDeleteCreature(_creature: Creature) {
		let compose = this.state.creaturesComposite;
        compose.del(_creature);
        console.log("delete");
        this.setState({creaturesComposite: compose});
    }

    renderList() {
        let listCreatures : Creature[] = this.state.creaturesComposite.getCreatures;
        let rendList = listCreatures.map(
            (key, index) => {
                return this.renderOneCreature(key, index);
            }
        );
        return rendList;
    }
    
    renderOneCreature(_creature: Creature, _index: number) {
        let name : string                           = _creature.getName;
        let mov  : Map<string, Movements.Movement>  = _creature.getMovements;
        let weap : Map<string, Weapons.Weapon>      = _creature.getWeapons;
        let arm  : Defense                          = _creature.getArmor;
        return (
            <TableRow key={_index}>
                <TableCell>
                    <Typography component="p">{name}</Typography>
                </TableCell>
                <TableCell>
                    <List>{convertToList(mov)}</List>
                </TableCell>
                <TableCell>
                    <List>{convertToList(weap)}</List>
                </TableCell>
                <TableCell>
                    <Typography component="p">
                        {arm.getLabel + ': ' + arm.getValue}
                    </Typography>
                    <Button 
                        onClick={() => this.handleClickDeleteCreature(_creature)}
                    >
                        <span aria-hidden="true">&times;</span>
                    </Button>
                </TableCell>
            </TableRow>
        );
    }

    render() {
        return (

            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            <Typography component="p"> Name</Typography>
                        </TableCell>
                        <TableCell>
                            <Typography component="p">Movement</Typography>
                        </TableCell>
                        <TableCell>
                            <Typography component="p">Weapon</Typography>
                        </TableCell>
                        <TableCell>
                            <Typography component="p">Armor</Typography>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {this.renderList()}
                </TableBody>
            </Table>
        );
    }
}

export default withStyles(styles)(TableCreatures);