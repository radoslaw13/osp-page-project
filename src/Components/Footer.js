import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import osp from '../Images/osp.png';
import { theme, FooterStyle } from '../assets/styles/MainStyle.js';
import { MuiThemeProvider } from '@material-ui/core/styles';


class Footer extends Component {


    render () {
        return (
            <MuiThemeProvider theme={theme} >
            <Grid container spacing={8} alignContent={'center'} alignItems={'center'} direction={'row'} justify={'center'}>
                <Grid item lg={4} md={4} xs={12} >
                    <Button href={"#top"}>
                        <img src={osp} alt={'logo'} width={"70%"} margin={"0 auto"} ></img>
                    </Button>
                </Grid>
                <Grid item lg={4} md={4} xs={12} >
                <div style={FooterStyle.buttonsDiv}>
                    <Button href={'https://www.facebook.com/OSPWilkowiecko'} target={"_blank"}> 
                        <img src="https://img.icons8.com/color/48/000000/facebook.png" alt="facebook"></img>
                    </Button>
                    <Button href={'https://www.youtube.com/channel/UC-AL3irCNp8gv8TCZkq7Sjw'} target={"_blank"}> 
                        <img src="https://img.icons8.com/color/48/000000/youtube.png" alt="youtube"></img>
                    </Button>
                </div>
                </Grid>
                <Grid item lg={4} md={4} xs={12} >
                    <Typography  variant="h5" >Kontakt</Typography>
                    <Typography  variant="body1">ul. Mikołaja z Wilkowiecka 8</Typography>
                    <Typography  variant="body1">42-152, Wilkowiecko</Typography>
                    <Typography  variant="body1">ospwilkowiecko@gmail.com</Typography>
                </Grid>
            </Grid>
            </MuiThemeProvider>
        )
    }
}

export default Footer;