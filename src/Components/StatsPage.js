import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import Typography from '@material-ui/core/Typography';
import { theme } from '../assets/styles/StatsStyle';
import Plot from 'react-plotly.js';
import 'typeface-roboto';
import '../assets/css/statsTable.css';

var Parse=require('parse');


class StatsPage extends Component {
    state = {
        actions: '',
    }

    async componentDidMount() {
        let actions = {pozar: 0, wypadek: 0, mzi: 0, drzewa: 0, podt: 0, cwicz: 0, mz: 0};
        const Posts = Parse.Object.extend("Posts");
        var query = new Parse.Query(Posts);
        query.notEqualTo("Type", "I");
        const results = await query.find();
        for(let i=0; i<results.length; i++) {
            switch(results[i].get("Type")) {
                case "P": actions.pozar++; break;
                case "MZI": actions.mzi++; actions.mz++; break;
                case "W": actions.wypadek++; actions.mz++; break;
                case "Pd": actions.podt++; actions.mz++; break;
                case "D": actions.drzewa++; actions.mz++; break;
                case "C": actions.cwicz++; break;
                default: actions = {};
            };
        }
        this.setState({
            actions: actions,
        })
    };

    render() {
        return (
            <MuiThemeProvider theme={theme} >
                <Grid container spacing={8} direction={'row'}>
                    <Grid item md={12} lg={12} xs={12} >
                            <Typography variant="h4"  align="center" style={{marginBottom: "2%", background: "rgba(166, 166, 166, 0.4)", borderRadius: "4px", padding: "10px"}}>
                                STATYSTYKI
                            </Typography>
                    </Grid>
                    <Paper >
                    <Grid container spacing={16} direction={'row'}>
                        <Grid item md={6} lg={6} xs={12} >
                            <div className="tableWrapper" >
                                <Typography variant="h5" >
                                    Statystyka wyjazdów
                                </Typography>
                                <table className="statsTable">
                                    <tbody>
                                        <tr>
                                            <td className="tdMain"><Typography variant="body1">Pożary </Typography></td>
                                            <td className="tdMain"><Typography variant="body1"> {this.state.actions.pozar}</Typography></td>
                                        </tr>
                                        <tr>
                                            <td className="tdMain"><Typography variant="body1">Miejscowe zagrożenia </Typography></td>
                                            <td className="tdMain"><Typography variant="body1"> {this.state.actions.mz}</Typography></td>
                                        </tr>
                                        <tr><td><Typography variant="caption" >W tym:</Typography></td></tr>
                                        <tr>
                                            <td className="tdSub"><Typography variant="body1">Wypadki </Typography></td>
                                            <td className="tdMain"><Typography variant="body1"> {this.state.actions.wypadek}</Typography></td>
                                        </tr>
                                        <tr>
                                            <td className="tdSub"><Typography variant="body1">Drzewa (wiatrołomy, śniegołomy) </Typography></td>
                                            <td className="tdMain"><Typography variant="body1"> {this.state.actions.drzewa}</Typography></td>
                                        </tr>
                                        <tr>
                                            <td className="tdSub"><Typography variant="body1">Powodzie/podtopienia </Typography></td>
                                            <td className="tdMain"><Typography variant="body1"> {this.state.actions.podt}</Typography></td>
                                        </tr>
                                        <tr>
                                            <td className="tdSub"><Typography variant="body1">Inne (owady, zabezpiecznia JRG, itp.) </Typography></td>
                                            <td className="tdMain"><Typography variant="body1"> {this.state.actions.mzi}</Typography></td>
                                        </tr>
                                        <tr>
                                            <td className="tdMain"><Typography variant="body1">Ćwiczenia </Typography></td>
                                            <td className="tdMain"><Typography variant="body1"> {this.state.actions.cwicz}</Typography></td>
                                        </tr>
                                        <tr>
                                            <td className="tdMain"><Typography variant="h6">Łącznie </Typography></td>
                                            <td className="tdMain"><Typography variant="h6"> {this.state.actions.cwicz+this.state.actions.mz+this.state.actions.pozar}</Typography></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </Grid>
                        <Grid item md={6} lg={6} xs={12} >
                            <Plot
                                data={[
                                    {
                                    values: [this.state.actions.pozar, this.state.actions.wypadek, this.state.actions.drzewa, this.state.actions.mzi, this.state.actions.podt],
                                    labels: ['Pożary', 'Wypadki', "Drzewa", "Inne", "Podtopienia/powodzie" ],
                                    type: 'pie',
                                    marker: {
                                        colors: ['rgb(96, 31, 31)', 'rgb(0, 0, 77)', 'rgb(77, 38, 0)', 'rgb(77, 0, 77)', 'rgb(0, 51, 0)']
                                        }
                                    }
                                ]}
                                layout={{ 
                                    title: {
                                        text: 'Dane procentowe na wykresie', 
                                        font: {size: 26}},  
                                    paper_bgcolor: 'transparent',
                                    height: 500,
                                    modebar: {
                                        orientation: "v"}, 
                                    font: {
                                        color: "white", 
                                        family: "Roboto, Helvetica, arial, sans-serif"},
                                    legend: {
                                        orientation: "v",
                                        x: "-0.1",
                                        xanchor: "left",
                                        yanchor: "middle",
                                        y: "0"},
                                    margin: {
                                        l: 20,
                                        r: 20,
                                        t: 100,
                                        b: 20,
                                    }
                                }}
                                useResizeHandler={true}
                                style={{width: "100%"}}
                            />
                        </Grid>
                    </Grid>
                    </Paper>
                </Grid>
            </MuiThemeProvider>
        )
    }
}

export default StatsPage;