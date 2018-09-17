import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import {withStyles} from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Icon from '@material-ui/core/Icon';
import AddIcon from '@material-ui/icons/Add';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    leftIcon: {
        marginRight: theme.spacing.unit,
    },
    rightIcon: {
        marginLeft: theme.spacing.unit + 20,
    },
    iconSmall: {
        fontSize: 20,
    },
});

function AppButton(props) {
    const {classes} = props;
    return (
        <Fragment >

            <Button variant="contained" color="primary" className={classes.button}
                    onClick={(e) => props.PopoverConfig(e.currentTarget)}
                    disabled={props.itemsChecked().length !== 1}
            >
                Edit
                <Icon className={classes.rightIcon}>edit</Icon>
            </Button>

            <Button variant="contained" color="secondary" className={classes.button}
                    onClick={() => props.DeleteItem()}
                    disabled={props.itemsChecked().length === 0}
            >
                Delete
                <DeleteIcon className={classes.rightIcon}/>
            </Button>

            <Button href="https://www.google.com.ua/?hl=ru" target="_blank" variant="contained" color="default"
                    className={classes.button}>
                Open Google
                <CloudUploadIcon className={classes.rightIcon}/>
            </Button>

            <Button style={{position: "fixed", right: 50, bottom: 50, backgroundColor: "#3aff35"}} variant="fab"
                    color="primary" aria-label="Add" className={classes.button}
                    onClick={() => props.openModal()}
                    disabled={props.itemsChecked().length >= 1}
            >
                <AddIcon/>
            </Button>

        </Fragment>
    );
}

AppButton.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppButton);



