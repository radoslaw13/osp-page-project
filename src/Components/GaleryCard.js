import React, { Component } from 'react';
import { Grid, 
    Card, 
    Button,
    Typography} from '@material-ui/core';
import PhotoViewer from './PhotoViewer';

class GaleryCard extends Component {
    state = {
        viewerIsOpen: false,
    }

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

    render() {
        return (
            <Grid item md={4} lg={4} xs={6}  >
                <Card >
                    <Button fullWidth={true} onClick={() => {this.openViewer()}} >
                        <div style={{height: "18rem"}}>
                            <div className="wrapperToImg">
                                <img className="imageWithHover" alt={this.props.title} src={this.props.photo} />
                            </div>
                        </div>
                    </Button>
                    <PhotoViewer 
                        images={this.props.photos}
                        openViewer={this.state.viewerIsOpen} 
                        closeViewer={() => {this.closeViewer()}} />
                    <div style={{margin: "2%"}} >
                        <Typography variant="h6" style={{color: "white"}} >{this.props.title}</Typography>
                        <Typography variant="caption" style={{color: "white"}} >{this.props.subheader}</Typography>
                    </div>
                </Card>
            </Grid>
        )
    }
}

export default GaleryCard;
