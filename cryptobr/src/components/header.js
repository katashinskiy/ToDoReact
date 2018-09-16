import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {withStyles} from '@material-ui/core/styles';
import {AppBar, Divider, Drawer, IconButton, List, Toolbar, Typography} from '@material-ui/core';
import {ChevronLeft, ChevronRight, Menu} from '@material-ui/icons';
import {mailFolderListItems, otherMailFolderListItems} from './sourse/tileData';
import AppButton from './buttons'
import {AppList} from "./list";
import Popover from '@material-ui/core/Popover';
import AppForm from "./form"
import AppFormEdit from "./editForm"
import Dialog from "@material-ui/core/es/Dialog/Dialog";
import DialogTitle from "@material-ui/core/es/DialogTitle/DialogTitle";
import DialogContentText from "@material-ui/core/es/DialogContentText/DialogContentText";
import DialogContent from "@material-ui/core/es/DialogContent/DialogContent";
import DialogActions from "@material-ui/core/es/DialogActions/DialogActions";
import Snackbar from '@material-ui/core/Snackbar';


const drawerWidth = 240;

const styles = theme => ({
    root: {
        color: "red",
        flexGrow: 1,
        height: 1000,
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing.unit * 7,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing.unit * 9,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
    },
});

class MiniDrawer extends React.Component {
    state = {
        open: false,
        isPopoverOpen: false,
        popoverElement: null,
        isModalOpen: false,
        isSnackBarOpen: false,
        SnackBarText: '',
        ItemsList: [
            {value: "Elem 1", title: "about Elem 1", checked: false},
            {value: "Elem 2", title: "about Elem 2", checked: false},
            {value: "Elem 3", title: "about Elem 3", checked: false},
            {value: "Elem 4", title: "about Elem 4", checked: false}
        ],
        title: '111',
        value: '222'

    };

    handleDrawerOpen = () => {
        this.setState({open: true});
    };

    handleDrawerClose = () => {
        this.setState({open: false});
    };

    deleteItem = () => {
        let array = this.state.ItemsList.filter(i => !i.checked);

        this.setState({
            ItemsList: array,
            isSnackBarOpen: true,
            SnackBarText: 'One elem was delete !'
        });
    };

    popoverConfig = (popover) => {
        this.setState({
            popoverElement: popover,
            isPopoverOpen: true
        })
    };

    openModal = () => {
        this.setState({
            isModalOpen: true
        })
    };

    closeModal = () => {
        this.setState({
            isModalOpen: false
        })
    };

    closePopover = () => {
        this.setState({
            isPopoverOpen: false
        })
    };

    editElementToDo = (newElement) => {
        let newListItem = this.state.ItemsList.map((elem) => {
            if(elem.checked === true){
                return newElement;
            }
            return elem;
        });

        this.setState({
            ItemsList: newListItem,
            isPopoverOpen: false,
            isSnackBarOpen: true,
            SnackBarText: 'One elem was edit !'
        });
    };

    checkedElement = (checked, index) => {
        let list = [...this.state.ItemsList];
        list[index].checked = checked;
        this.setState({
            ItemsList: list
        });

        let CheckedElem = list.filter(elem => elem.checked);

        if (CheckedElem.length === 1) {
            this.setState({
                title: CheckedElem[0].title,
                value: CheckedElem[0].value
            });
        }
    };

    itemsChecked = () => this.state.ItemsList.filter(elem => elem.checked);

    closeSnackbar =() => {
        setTimeout(() => {
            this.setState({
                isSnackBarOpen: false
            })
        }, 500)
    };

    addElementToToDO = (elem) => {
        this.setState({
            ItemsList: [...this.state.ItemsList,
                elem
            ],
            isPopoverOpen: false,
            isModalOpen: false,
            isSnackBarOpen: true,
            SnackBarText: 'New elem was added !'
        });
    };

    render() {
        const {classes, theme} = this.props;

        return (
            <div className={classes.root}>
                <AppBar
                    position="fixed"
                    className={classNames(classes.appBar, this.state.open && classes.appBarShift)}
                >
                    <Toolbar disableGutters={!this.state.open}>
                        <IconButton
                            color="inherit"
                            aria-label="Open drawer"
                            onClick={this.handleDrawerOpen}
                            className={classNames(classes.menuButton, this.state.open && classes.hide)}
                        >
                            <Menu/>
                        </IconButton>
                        <Typography variant="title" color="inherit" noWrap>
                            Mini variant drawer
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer
                    variant="permanent"
                    classes={{
                        paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
                    }}
                    open={this.state.open}
                >
                    <div className={classes.toolbar}>
                        <IconButton onClick={this.handleDrawerClose}>
                            {theme.direction === 'rtl' ? <ChevronRight/> : <ChevronLeft/>}
                        </IconButton>
                    </div>
                    <Divider/>
                    <List>{mailFolderListItems}</List>
                    <Divider/>
                    <List>{otherMailFolderListItems}</List>
                </Drawer>
                <main className={classes.content}>
                    <div className={classes.toolbar}/>
                    <div className="container">
                        <Typography noWrap>
                            <AppButton
                                itemsChecked={this.itemsChecked}
                                PopoverConfig={this.popoverConfig}
                                DeleteItem={this.deleteItem}
                                openModal={this.openModal}
                            />
                            <Popover
                                id="render-props-popover"
                                open={this.state.isPopoverOpen}
                                anchorEl={this.state.popoverElement}
                                onClose={this.closePopover}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'center',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'center',
                                }}

                            >
                                <Typography style={{width: 400, padding: "15px 30px"}}>
                                    <AppFormEdit
                                        EditData={() => ({
                                            title: this.state.title,
                                            value: this.state.value
                                        })}

                                        editElement={this.editElementToDo}
                                    />
                                </Typography>
                            </Popover>
                            <AppList
                                items={this.state.ItemsList}
                                onChecked={this.checkedElement}
                            />
                        </Typography>
                        <Dialog
                            // fullScreen={fullScreen}
                            open={this.state.isModalOpen}
                            onClose={this.closeModal}
                            aria-labelledby="responsive-dialog-title"
                        >
                            <DialogTitle id="responsive-dialog-title">{"Add new line to ToDo"}</DialogTitle>
                            <DialogContent>
                                <DialogContentText>
                                    Please add new element to your list
                                </DialogContentText>
                                <AppForm
                                    addElem={this.addElementToToDO}
                                />
                            </DialogContent>
                            <DialogActions>
                            </DialogActions>
                        </Dialog>
                        <Snackbar
                            open={this.state.isSnackBarOpen}
                            onClose={this.closeSnackbar}
                            // TransitionComponent={this.state.Transition}
                            ContentProps={{
                                'aria-describedby': 'message-id',
                            }}
                            message={<span id="message-id">{this.state.SnackBarText}</span>}
                        />
                    </div>
                </main>
            </div>
        );
    }
}

MiniDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(MiniDrawer);

