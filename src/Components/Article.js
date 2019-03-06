import React, { Component } from 'react';
import {
    Grid, 
    Paper,
    Typography,
    Button,
    MuiThemeProvider} from '@material-ui/core';
import { Link } from 'react-router-dom';
import PhotoViewer from './PhotoViewer';
import { theme, ArticleStyle } from '../assets/styles/MainStyle';
import '../assets/css/previewStyle.css';
import { dateTranscription } from '../sripts/dateTranscription';

var Parse=require('parse');


class Article extends Component {
    state = {
        articleData: "",
        viewerIsOpen: false,
    };

    openViewer = () => {
        this.setState({
            viewerIsOpen: true,
        })
    }

    closeViewer = () => {
        this.setState({
            viewerIsOpen: false
        })
    }


    async componentDidMount()  {
        var article = Parse.Object.extend("Posts");
        var query = new Parse.Query(article);
        query.equalTo("objectId", `${this.props.match.params.id}` );
        var results =  await query.find();
        var photosArr = [];
        for(let i=0; i<results[0].get("Photo").length; i++){
            photosArr.push({src: results[0].get("Photo")[i]})
        }
        this.setState({
            articleData: {
                title: results[0].get("Title"),
                description: results[0].get("Description"),
                date: results[0].get("Date"),
                photo: photosArr,
            },
        })
    }


    render() {
        return (
            <MuiThemeProvider theme={theme} >
                <Grid container spacing={8} style={{position: "relative"}}>
                    <Paper style={{minHeight: "300px", display: "inherit"}}>
                        <Grid container direction={"row"} >
                            <Grid item md={12} lg={12} xs={12} >
                                <Typography variant="h5" >
                                    {this.state.articleData.title}
                                </Typography>
                                <Typography variant="subtitle1">
                                    {this.state.articleData.date ? dateTranscription(this.state.articleData.date) : ""}
                                </Typography>
                            </Grid>
                            <Grid item md={5} lg={5} xs={12} >
                                <Button onClick={() => {this.openViewer()}}>
                                    <div style={{height: "25rem"}}>
                                        <div className="wrapperToImg">
                                            <img className="imageWithHover"
                                                src={`${this.state.articleData.photo ? this.state.articleData.photo[0].src : null }`} 
                                                width="100%" 
                                                alt={this.state.articleData.title} >
                                            </img>
                                        </div>
                                    </div>
                                </Button>
                                { this.state.articleData ? <PhotoViewer 
                                                                    images={this.state.articleData.photo}
                                                                    openViewer={this.state.viewerIsOpen} 
                                                                    closeViewer={() => {this.closeViewer()}} /> : null  }
                            </Grid>
                            <Grid item md={7} lg={7} xs={12} >
                                <Typography variant="body1" component="div">{this.state.articleData.description}</Typography>
                                <div style={ArticleStyle.backButtonDiv}>
                                    <Link style={{textDecoration: "none"}} to="/osp-page-project/">
                                        <Button>Powrót</Button>
                                    </Link>
                                </div>
                            </Grid>
                        </Grid>
                    </Paper>    
                </Grid>
            </MuiThemeProvider>
        )
    }
}

export default Article;