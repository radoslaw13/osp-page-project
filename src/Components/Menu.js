import React, { Component } from 'react';
import {
    Grid,
    MuiThemeProvider,
    Hidden} from '@material-ui/core';
import AboutPopover from './MenuButtons&Popovers/AboutPopover';
import SimpleMenuButton from './MenuButtons&Popovers/SimpleMenuButton';
import MobileMenu from './MenuButtons&Popovers/MobileMenu';
import Logo from './Logo';
import { theme, MenuStyle } from '../assets/styles/MenuStyle'

class MenuGrid extends Component {
    render () {
        return (
            <MuiThemeProvider theme={theme} >
                <div style={MenuStyle.menuWrapper} >
                    <Grid container spacing={8} justify={"center"} alignItems={'center'} style={MenuStyle.menuGrid} id="menu" >
                        <Grid item md={2} xs={6} >
                            <Logo />
                        </Grid>
                        <Hidden only={['xs', 'sm']}>
                            <Grid item md={2} xs={12} > 
                                <SimpleMenuButton heading="Aktualności" path="" />
                            </Grid>
                            <Grid item md={2} xs={12} > 
                                <AboutPopover />
                            </Grid>
                            <Grid item md={2} xs={12} >
                                <SimpleMenuButton heading="Statystyki" path="stats" />
                            </Grid>
                            <Grid item md={2} xs={12}>
                                <SimpleMenuButton heading="Galeria" path="galery" />
                            </Grid>
                            <Grid item md={2} xs={12}>
                                <SimpleMenuButton heading="Kontakt" />
                            </Grid>
                        </Hidden>
                        <Hidden mdUp >
                            <Grid item xs={6} >
                                <MobileMenu />
                            </Grid>
                        </Hidden>
                    </Grid>
                </div>
            </MuiThemeProvider>
        )
    }
}

export default MenuGrid;