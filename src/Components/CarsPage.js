import React, { Component } from 'react';
import {
    Grid,
    MuiThemeProvider,
    Typography} from '@material-ui/core';
import CarCard from './CarCard';
import { theme } from '../assets/styles/MainStyle';
import renault1 from '../Images/renault1.jpg';
import renault2 from '../Images/renault2.jpg';
import jelcz1 from '../Images/jelcz1.jpg';
import jelcz2 from '../Images/jelcz2.jpg';

const renault = [ {src: renault1}, {src: renault2} ];
const jelcz = [ {src: jelcz1}, {src: jelcz2} ];

class Cars extends Component {


    render() {
        return (
            <MuiThemeProvider theme={theme} >
                <Grid container spacing={8}>                
                    <Grid item md={12} lg={12} xs={12} >
                        <Typography variant="h4"  align="center" style={{marginBottom: "2%", background: "rgba(166, 166, 166, 0.4)", borderRadius: "4px"}}>
                            SPRZĘT
                        </Typography>
                    </Grid>
                    <Grid container spacing={24} direction={"row"} >
                        <CarCard 
                            imageArr={renault}
                            title="499[S]44 GBA 2/17 Renault Midliner M210 /WISS"
                            subheader="Rok produkcji: 2000"
                            description={<p>
                                <li>załoga: 6-osobowa</li>
                                <li>zbiornik wody: 2000 litrów</li>
                                <li>zbiornik środka pianotwórczego: 500 litrów</li>
                                <li>silnik ??</li></p>} />
                        <CarCard
                            imageArr={jelcz}
                            title="499[S]43 GCBM 6/8 Jelcz P325 DS /Osiny"
                            subheader="Rok produkcji: 1984"
                            description={<p>
                                <li>załoga: 6-osobowa</li>
                                <li>zbiornik wody: 6000 litrów</li>
                                <li>silnik ??</li></p> } />
                    </Grid>
                </Grid>
            </MuiThemeProvider>
        )
    }
}

export default Cars;