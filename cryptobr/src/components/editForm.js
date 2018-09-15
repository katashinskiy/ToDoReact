import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/es/Button/Button";
import Icon from "@material-ui/core/es/Icon/Icon";

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    rightIcon: {
        marginLeft: theme.spacing.unit + 5,
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 400,
    },
    menu: {
        width: 200,
    },
});


class AppForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            value: '',
            errors: {
                title: '',
                value: ''
            }
        }
    }

    editMessage() {
        let errors = {};

        if (!this.state.title) errors.title = "Input title !";

        if (!this.state.value) errors.value = "Input value !";

        if (errors.title || errors.value) {
            this.setState({
                errors
            });

            return
        }

        this.props.editElement({
            value: this.state.value,
            title: this.state.title,
            checked: false
        });

        this.setState({
            title: '',
            value: '',
            errors: {
                title: '',
                value: ''
            }
        });

    };

    render() {
        const {classes} = this.props;
        return (
            <Fragment>
                <TextField
                    defaultValue={this.props.EditData().title}
                    id="Title"
                    label={this.state.errors.title || "Title"}
                    placeholder="Input title"
                    className={classes.textField}
                    error={this.state.errors.title}
                    margin="normal"
                    onChange={(event) => {
                        this.setState({
                            title: event.target.value,
                            errors: {
                                title: ''
                            }
                        });
                    }}
                />
                <TextField
                    defaultValue={this.props.EditData().value}
                    id="Value"
                    label={this.state.errors.value || "Value"}
                    placeholder="Input value"
                    className={classes.textField}
                    error={this.state.errors.value}
                    margin="normal"
                    onChange={(event) => {
                        this.setState({
                            value: event.target.value,
                            errors: {
                                value: ''
                            }
                        });
                    }}
                    style={{marginBottom: "60px"}}
                />
                <Button style={{position: "absolute", right: "20px", bottom: "15px" }} variant="contained" color="primary"
                        className={classes.button}
                        onClick={() => this.editMessage()} // that don't lost context(this)
                >
                    Save
                    <Icon className={classes.rightIcon} >save</Icon>
                </Button>
            </Fragment>
        )
    }
}

AppForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppForm);