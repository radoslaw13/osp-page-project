import React, { Component } from 'react';
import {Grid, Button, MenuItem, Menu} from '@material-ui/core';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

class AddPhotosComponent extends Component {
    state = {
        anchorEl: null,
    }

    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
      };

      handleMainPhotoAndClose = () => {
        this.setState({ anchorEl: null });
        this.props.mainPhotoFunc();
      };

      handleDeleteAndClose = () => {
        this.setState({ anchorEl: null });
        this.props.deleteFunc();
      };

      handleClose = () => {
        this.setState({ anchorEl: null });
      }

    render() {
        const { anchorEl } = this.state;
        return (
            <Grid item md={3} lg={3} xs={6} className="photoGrid" >
                {this.props.index === 0 ?
                    <div className="mainPhotoDiv">
                        <Button aria-owns={anchorEl ? 'photo-menu' : undefined} onClick={this.handleClick} >
                            <img className="MainPhotoPrev" alt={'image'+this.props.index} src={this.props.image} />
                        </Button>
                        <div className="MainPhotoText">Zdjęcie główne</div>
                    </div> :
                        <Button aria-owns={anchorEl ? 'photo-menu' : undefined} onClick={this.handleClick}>
                            <img className="photoPrev" alt={'image'+this.props.index} src={this.props.image}  />
                        </Button> }
                    <ClickAwayListener onClickAway={this.handleClose}>
                        <Menu
                            id="photo-menu"
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={this.handleClose}
                        >
                            { this.props.index === 0 ? null : <MenuItem onClick={this.handleMainPhotoAndClose}>Ustaw jako główne</MenuItem> }
                            <MenuItem onClick={this.handleDeleteAndClose}>Usuń</MenuItem>
                        </Menu>
                    </ClickAwayListener>
            </Grid>
        )
    }
}

export default AddPhotosComponent;