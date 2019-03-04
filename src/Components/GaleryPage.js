import React, { Component } from 'react';
import { Grid, MuiThemeProvider, Typography} from '@material-ui/core';
import '../assets/css/previewStyle.css';
import { theme } from '../assets/styles/MainStyle';
import GaleryCard from './GaleryCard';
import Pagination from './Pagination';
import { dateTranscription } from '../sripts/dateTranscription';

var Parse=require('parse');



class GaleryPage extends Component {
    state = {
        posts: [],
        pages: 0,
        offset: 0,
        currentPage: 0
    }


    async componentDidMount() {
        const Posts = Parse.Object.extend("Posts");
        var query = new Parse.Query(Posts);
        query.descending("Date");
        const results = await query.find();
        let posts=[];
        var photoArr=[];
        for (let i = 0; i < results.length; i++) {
            photoArr=[];
            posts.push({
                title: results[i].get("Title"),
                date: results[i].get("Date"),
                photo: results[i].get("Photo"),
            })
            for (let j = 0; j<posts[i].photo.length; j++ ) {
                photoArr.push({src: posts[i].photo[j], caption: posts[i].title});
            }
            posts[i].photo = photoArr;
        }
          this.setState({
              posts: posts,
              pages: posts.length/6,
          })
    };

    handlePageChange = page => {
        if( this.state.currentPage < page.selected ) {
            this.setState({
                offset: this.state.offset+6*(page.selected - this.state.currentPage),
                currentPage: page.selected,
            })
        } else {
            this.setState({
                offset: this.state.offset-6*(this.state.currentPage - page.selected),
                currentPage: page.selected,
            })
        }   
    };

    render() {
        return (
            <MuiThemeProvider theme={theme} >
                <Grid container spacing={8} >
                    <Grid item md={12} lg={12} xs={12} >
                        <Typography variant="h4"  align="center" style={{marginBottom: "2%", background: "rgba(166, 166, 166, 0.4)", borderRadius: "4px", padding: "10px"}}>
                            GALERIA
                        </Typography>
                    </Grid>
                    <Grid container spacing={24} direction={'row'} >
                        {this.state.posts.slice(this.state.offset, this.state.offset + 6).map(post => (
                            <GaleryCard
                                title={post.title}
                                subheader={dateTranscription(post.date)}
                                photo={post.photo[0].src}
                                key={post.title}
                                photos={post.photo} />
                        ))}
                    </Grid>
                    <Pagination 
                        pages={this.state.pages}
                        onPageChange={this.handlePageChange}/>
                </Grid>
            </MuiThemeProvider>
        )
    }
}

export default GaleryPage;