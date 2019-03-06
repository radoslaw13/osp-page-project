import React, { Component } from 'react';
import { Grid, 
    CardContent, 
    Typography, 
    CardHeader, 
    Card,
    MuiThemeProvider,
    Button} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { theme, NewsCardStyle } from '../assets/styles/NewsCardStyle.js';

class NewsCards extends Component {
 
    render() {
        return (
            <Grid item md={6} xs={12} >
                <MuiThemeProvider theme={theme}>
                         <Card>
                             <Grid container spacing={8}  direction={'row'}  >
                                 <Grid item md={12}>
                                     <CardHeader
                                         title={this.props.title}
                                         subheader={this.props.subheader}
                                     />
                                 </Grid>
                                 <Grid item md={5} xs={12}>
                                    <div style={NewsCardStyle.imageWrapper}>
                                            <img style={NewsCardStyle.image} alt={this.props.title} src={this.props.photo} />
                                    </div>
                                 </Grid>
                                 <Grid item md={7} xs={12} style={{position: "relative"}}>
                                    <CardContent>
                                        <Typography variant="subtitle1">
                                            {this.props.description} ... 
                                        </Typography>
                                    </CardContent>
                                    <div style={{position: "absolute", right: "0", bottom: "0", margin: "10px"}} >
                                        <Link style={{textDecoration: "none"}} to={{pathname: '/osp-page-project/article/' + this.props.id}}>
                                            <Button >Czytaj dalej</Button>
                                        </Link>
                                    </div>
                                 </Grid>
                             </Grid> 
                         </Card>
                         </MuiThemeProvider>
                     </Grid>
        )
    }
}

export default NewsCards;