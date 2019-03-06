import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Paper, 
    Grid, 
    Typography,
    Button } from '@material-ui/core';
import deleteIcon from '../Images/delete.png';
import editIcon from '../Images/edit.png';
import '../assets/css/ManagePosts.css';

class ManagePostPanel extends Component {

    render() {
        return (
            <Grid item  md={12} lg={12} xs={12} >
                <Paper >
                    <Grid container spacing={24} alignContent={'center'} alignItems={'center'} direction={"row"} style={{margin: "0", width: "100%"}} >
                        <Grid item md={3} lg={3} xs={6}>
                            <Typography variant='h6'className="typo-center">
                                {this.props.title}
                            </Typography>
                        </Grid>
                        <Grid item md={3} lg={3} xs={6}>
                            <Typography variant='h6' className="typo-center">
                                {this.props.date}
                            </Typography>
                        </Grid>
                        <Grid item md={4} lg={4} xs={8}>
                            <Typography variant='subtitle1' className="typo-center">
                                {this.props.description}
                            </Typography>
                        </Grid>
                        <Grid item md={1} lg={1} xs={2}>
                            <Link to={{pathname: '/osp-page-project/admin/edit/' + this.props.id}} >
                                <Button ><img className="iconButton" src={editIcon} alt="Edytuj post" /></Button>
                            </Link>
                        </Grid>
                        <Grid item md={1} lg={1} xs={2}>
                            <Button onClick={this.props.deleteFoo}><img className="iconButton" src={deleteIcon} alt="Usuń post" /></Button>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        )
    }
}

export default ManagePostPanel;