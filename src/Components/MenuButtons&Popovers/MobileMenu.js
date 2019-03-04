import React, { Component } from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Paper from '@material-ui/core/Paper';
import SimpleMenuButton from './SimpleMenuButton';
import AboutPopover from './AboutPopover';
import {theme} from '../../assets/styles/PopoverStyle';


class MobileMenu extends Component {
  state = {
    open: false,
    anchorEl: null,
  };

  handleClick = (event) => {
    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    return (
        <MuiThemeProvider theme={theme} >
            <Button
                onClick={this.handleClick}
                fullWidth={true}
            >
                MENU
            </Button>
            <Popover
                id="simple-popper"
                open={this.state.open}
                anchorEl={this.state.anchorEl}
                onClose={this.handleClose}
                PaperProps={{width: "200px"}}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
            <Paper
                style={{width: this.state.anchorEl ? this.state.anchorEl.offsetWidth : null + 'px', left: this.state.anchorEl ? this.state.anchorEl.offsetLeft : null + "px"}}
            >
                <MenuList>
                    <MenuItem onClick={this.handleClose}><SimpleMenuButton heading="Aktualności" path="" /></MenuItem>
                    <AboutPopover close={this.handleClose} />
                    <MenuItem onClick={this.handleClose}><SimpleMenuButton heading="Statystyki" path="stats" /></MenuItem>
                    <MenuItem onClick={this.handleClose}><SimpleMenuButton heading="Galeria" path="galery" /></MenuItem>
                    <MenuItem onClick={this.handleClose}><SimpleMenuButton heading="Kontakt" /></MenuItem>
                </MenuList>
            </Paper>
            </Popover>
        </MuiThemeProvider>
    );
  }
}


export default MobileMenu;