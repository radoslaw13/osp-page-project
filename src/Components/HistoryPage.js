import React, { Component } from 'react';
import {
    Grid,
    MuiThemeProvider,
    Typography,
    Paper} from '@material-ui/core';
import { theme, HistoryStyle } from '../assets/styles/MainStyle';
import history1 from '../Images/history1.jpg';
import history2 from '../Images/history2.jpg';


class HistoryPage extends Component {


    render() {
        return (
            <MuiThemeProvider theme={theme} >
                <Grid container spacing={8} >                
                    <Grid item md={12} lg={12} xs={12} >
                        <Typography variant="h4"  align="center" style={{marginBottom: "2%", background: "rgba(166, 166, 166, 0.4)", borderRadius: "4px", padding: "10px"}}>
                            HISTORIA
                        </Typography>
                    </Grid>
                    <Grid container direction={"column"} >
                        <Paper>
                            <Grid container direction="row" style={HistoryStyle.paragraphContainer} >
                                <Grid item md={5} lg={5} xs={12} >
                                    <div style={HistoryStyle.imageWrapper}>
                                        <img src={history1} alt="Poczatki" style={HistoryStyle.image} />
                                    </div>
                                </Grid>
                                <Grid item md={7} lg={7} xs={12} >
                                    <Typography variant="h5" >
                                        Założenie jednostki
                                    </Typography>
                                    <Typography variant="body1" component="div" >
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis iaculis leo et nisi ultricies tincidunt. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed porttitor gravida pharetra. Quisque eu ex ut velit viverra lacinia. Nulla facilisi. Praesent posuere et libero nec hendrerit. Nam viverra elit vel tellus pretium, at laoreet dui auctor. Aenean ante ipsum, consequat tincidunt varius id, tristique in eros. 
                                        Aliquam egestas consectetur sapien, ut sagittis odio laoreet nec. Aenean tincidunt, erat ac imperdiet posuere, ex felis sollicitudin orci, sit amet venenatis sem justo pellentesque elit. Integer dignissim euismod laoreet. Mauris dapibus euismod orci quis iaculis. Vivamus eu nulla euismod lacus faucibus convallis. Suspendisse hendrerit, justo vitae sodales ultricies, erat nulla egestas libero, ut dignissim lectus dui quis felis. In quis massa congue, tincidunt ante quis, pharetra nunc. Aenean enim ligula, elementum eu dolor eget, finibus elementum erat. Vestibulum id dolor sit amet enim consequat consectetur in vitae arcu. Morbi nunc nulla, euismod sed sapien id, hendrerit tempus nibh. Morbi mattis odio vitae arcu aliquet accumsan. Duis sed augue dictum, condimentum ante eget, efficitur magna. Mauris lobortis mauris eros, at volutpat justo efficitur eget. Nulla et cursus lacus, nec molestie dui. Cras laoreet viverra magna ac rutrum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid container direction="row" style={HistoryStyle.paragraphContainer} >
                                <Grid item md={5} lg={5} xs={12} >
                                    <div style={HistoryStyle.imageWrapper}>
                                        <img src={history2} alt="Remiza" style={HistoryStyle.image} />
                                    </div>
                                </Grid>
                                <Grid item md={7} lg={7} xs={12} >
                                    <Typography variant="h5" >
                                        Nowa remiza
                                    </Typography>
                                    <Typography variant="body1" >
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ullamcorper venenatis urna, ac convallis lacus convallis ac. Pellentesque est orci, finibus bibendum venenatis sed, aliquet id justo. Aliquam erat volutpat. Proin vel augue erat. Aenean pulvinar congue tellus, in eleifend dui venenatis nec. In tempor erat non augue facilisis, in consequat mauris tempor. Sed at dignissim dolor, eu eleifend ligula. Nulla egestas arcu a viverra ornare.
                                    </Typography>
                                </Grid>
                                </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </MuiThemeProvider>
            )
        }
    }
    
    export default HistoryPage;