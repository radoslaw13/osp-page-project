import React, { Component } from 'react';
import {
    Grid,
    Typography,
    Button,
    Card,
    CardHeader,
    CardContent} from '@material-ui/core';
import PhotoViewer from './PhotoViewer';
import '../assets/css/previewStyle.css';


class CarCard extends Component {
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
            <Grid item md={6} lg={6} xs={12}>
                <Card>
                    <Button fullWidth={true} onClick={() => {this.openViewer()}}>
                        <div className="wrapperToImg">
                            <img alt={this.props.title} className="imageWithHover" src={this.props.imageArr[0].src}  width="300px" />
                        </div>
                    </Button>
                        <PhotoViewer 
                            images={this.props.imageArr}
                            openViewer={this.state.viewerIsOpen} 
                            closeViewer={() => {this.closeViewer()}} />
                    <CardHeader
                        title={this.props.title}
                        subheader={this.props.subheader} />
                    <CardContent>
                        <Typography variant="subtitle1" component="div">
                            {this.props.description}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        )
    }
}

export default CarCard;