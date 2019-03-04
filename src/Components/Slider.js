import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Slide } from 'react-slideshow-image';
import '../assets/css/Slider.css';
import slide1 from '../Images/slide1.jpg';
import slide3 from '../Images/slide3.jpg';
import slide2 from '../Images/slide2.jpg';
 
const slideImages = [
  slide1,
  slide2,
  slide3,
];
 
const properties = {
  duration: 10000,
  transitionDuration: 1000,
  infinite: true,
  indicators: true,
  arrows: false,
}
 
const Slideshow = () => {
    return (
        <Grid container spacing={8} justify={'center'} style={{marginBottom: "10px", width: "unset", margin: "0px"}} id="slider" >
        <Grid item md={11} lg={8} xs={12}> 
                <Slide {...properties}>
                    <div className="each-slide" >
                        <div style={{backgroundImage: `url(${slideImages[0]})`}}>
                        </div>
                    </div>
                    <div className="each-slide" >
                        <div style={{backgroundImage: `url(${slideImages[1]})`}}>
                        </div>
                    </div>
                    <div className="each-slide" >
                        <div style={{backgroundImage: `url(${slideImages[2]})`}}>
                        </div>
                    </div>
                </Slide>
        </Grid>
        </Grid>
    )
}

export default Slideshow;