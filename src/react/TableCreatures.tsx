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
import { withStyles, Theme, IconButton, Menu, MenuItem } from "@material-ui/core";
import List from "@material-ui/core/List/List";
import Typography from "@material-ui/core/Typography/Typography";
import renderMapProperties from "./renderMapProperties"


interface Props {
    creaturesComposite: Composite;
}

interface State {
    creaturesComposite: Composite;
    menuState: any;
    dialogState: any;
}

const columns = [
    'Battle',
    'Name',
    'State',
    'Movements',
    'Weapons',
    'Armor',
    'Actions'
];

class TableCreatures extends React.Component<Props, State> {

    constructor(props: any) {
        super(props);
        this.state = {creaturesComposite: this.props.creaturesComposite, menuState: false, dialogState: false};
    }

    /*----------------Handle--------------------*/
    handleClickMenu = (event:any) => {
        this.setState({ menuState: event.currentTarget });
    };

    handleCloseMenu = () => {
        this.setState({ menuState: null });
    };

    handleClickDeleteCreature(_creature: Creature) {
		let compose = this.state.creaturesComposite;
        compose.del(_creature);
        console.log("delete");
        this.setState({creaturesComposite: compose});
    }

    handleSay(_creature: Creature) {
        alert(_creature.showProperties());
    }

    renderList() {
        let listCreatures : Creature[] = this.state.creaturesComposite.getCreatures;
        return listCreatures.map(
            (key, index) => {
                return this.renderOneCreature(key, index);
            }
        );
    }
    
    renderOneCreature(_creature: Creature, _index: number) {
        let name : string                           = _creature.getName;
        let mov  : Map<string, Movements.Movement>  = _creature.getMovements;
        let weap : Map<string, Weapons.Weapon>      = _creature.getWeapons;
        let arm  : Defense                          = _creature.getArmor;
        const { menuState } = this.state;
        return (
            <TableRow key={_index}>
                <TableCell>

                </TableCell>
                <TableCell>
                    <Typography component="p">{name}</Typography>
                </TableCell>
                <TableCell>
                    <Typography component="p">{_creature.getStatus}</Typography>
                </TableCell>
                <TableCell>
                    <List>{renderMapProperties(mov)}</List>
                </TableCell>
                <TableCell>
                    <List>{renderMapProperties(weap)}</List>
                </TableCell>
                <TableCell>
                    <Typography component="p">
                        {arm.getLabel + ': ' + arm.getValue}
                    </Typography>
                </TableCell>
                <TableCell>
                    <Button
                        aria-owns={menuState ? 'simple-menu' : undefined}
                        aria-haspopup="true"
                        onClick={this.handleClickMenu}
                    >
                    Menu
                    </Button>
                    <Menu
                        id="simple-menu"
                        anchorEl={menuState}
                        open={Boolean(menuState)}
                        onClose={this.handleCloseMenu}
                    >
                        <MenuItem 
                            onClick={
                                () => {
                                    this.handleClickDeleteCreature(_creature);
                                    this.handleCloseMenu;
                                }
                            }
                        >
                            Delete
                        </MenuItem>
                        <MenuItem 
                            onClick={
                                () => {
                                    this.handleSay(_creature);
                                    this.handleCloseMenu;
                                }
                            }
                        >
                            Info
                        </MenuItem>
                    </Menu>
                </TableCell>
            </TableRow>
        );
    }

    render() {
        return (
            <Table>
                <TableHead>
                    <TableRow>
                        {
                            columns.map(
                                (key, index) => (
                                    <TableCell key={index}>
                                        <Typography component="p">{key}</Typography>
                                    </TableCell>
                                )
                            )
                        }
                    </TableRow>
                </TableHead>
                <TableBody>
                    {this.renderList()}
                </TableBody>
            </Table>
        );
    }
}

export default TableCreatures;