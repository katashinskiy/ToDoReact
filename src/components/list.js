import React, {Fragment} from "react";
import {List, ListItem, ListItemText} from "@material-ui/core";
import Divider from '@material-ui/core/Divider';
import Checkbox from "@material-ui/core/es/Checkbox/Checkbox";

export const AppList = (props) => {
    return (
        <Fragment>
            <List>
                {props.items.map((item, index) => {
                    return (<Fragment key={index}>
                        <ListItem button>
                            <Checkbox
                                onChange={(e, bool) =>  props.onChecked(bool, index) }
                                checked={item.checked}
                            />
                            <ListItemText primary={item.value} secondary={item.title}/>
                        </ListItem>
                        <Divider/>
                    </Fragment>)
                })}
            </List>
        </Fragment>
    )
};