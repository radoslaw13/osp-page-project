import React, { Component } from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Paper from '@material-ui/core/Paper';
import {theme} from '../../assets/styles/PopoverStyle';
import { Link } from 'react-router-dom';


class AboutPopover extends Component {
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
            O jeednostce
          </Button>
          <Popover
            id="simple-popper"
            open={this.state.open}
            anchorEl={this.state.anchorEl}
            onClose={this.handleClose}
            onExit={this.props.close}
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
              <Link to="/osp-page-project/history" style={{textDecoration: "none"}} >
                  <MenuItem style={{display: "block", textAlign: "center"}} onClick={this.handleClose}>Historia</MenuItem>
                </Link>
                <MenuItem style={{display: "block", textAlign: "center"}} onClick={this.handleClose}>Zarząd OSP</MenuItem>
                <Link to="/osp-page-project/cars" style={{textDecoration: "none"}} >
                  <MenuItem style={{display: "block", textAlign: "center"}} onClick={this.handleClose}>Sprzęt</MenuItem>
                </Link>
              </MenuList>
            </Paper>
          </Popover>
        </MuiThemeProvider>
    );
  }
}


export default AboutPopover;