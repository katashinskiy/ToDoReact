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
        width: 500,
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

    addMessage() {
        let errors = {};

        if (!this.state.title) errors.title = "Input title !";

        if (!this.state.value) errors.value = "Input value !";

        if (errors.title || errors.value) {
            this.setState({
                errors
            });

            return
        }

        this.props.addElem({
            title: this.state.title,
            value: this.state.value,
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
                    id="Title"
                    label={this.state.errors.title || "Title"}
                    placeholder="Input title"
                    className={classes.textField}
                    // value={this.state.name}
                    // onChange={this.handleChange('name')}
                    error={this.state.title === ''}
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
                    id="Value"
                    label={this.state.errors.value || "Value"}
                    placeholder="Input value"
                    className={classes.textField}
                    // value={this.state.name}
                    // onChange={this.handleChange('name')}
                    error={this.state.value === ''}
                    margin="normal"
                    onChange={(event) => {
                        this.setState({
                            value: event.target.value,
                            errors: {
                                value: ''
                            }
                        });
                    }}
                    style={{marginBottom: "50px"}}
                />
                <Button style={{position: "absolute", right: "20px", bottom: "15px" }} variant="contained" color="primary"
                        className={classes.button}
                        onClick={() => this.addMessage()} // that don't lost context(this)
                >
                    Add
                    <Icon className={classes.rightIcon} >send</Icon>
                </Button>
            </Fragment>
        )
    }
}

AppForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppForm);