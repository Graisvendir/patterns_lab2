import * as React from "react";
import ListItem from "@material-ui/core/ListItem/ListItem";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import { Property } from "../properties/property";


export default function renderMapProperties(_map: Map<string, Property>) {
    let arrayOfValues: Property[] = [];
    _map.forEach(element => {
        arrayOfValues.push(element);    
    });

    return arrayOfValues.map(
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
}