import React from "react";
import {List, ListItem, ListItemText} from "@material-ui/core";
import Divider from '@material-ui/core/Divider';
import Checkbox from "@material-ui/core/es/Checkbox/Checkbox";

export const AppList = (props) => {
    return (
        <List>
            {props.items.map((item, index) => {
                return <div key={index}>
                    <ListItem button dense>
                        <Checkbox
                            onChange={(e, bool) => props.onChecked(bool, index)}
                            checked={item.checked}
                        />
                        <ListItemText primary={item.value} secondary={item.title}/>
                    </ListItem>
                    <Divider/>
                </div>
            })}
        </List>
    )
};