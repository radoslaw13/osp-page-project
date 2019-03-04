import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import Typography from '@material-ui/core/Typography';
import Pagination from './Pagination';
import NewsCards from './NewsCard.js';
import { theme } from '../assets/styles/MainStyle';
import { dateTranscription } from '../sripts/dateTranscription';

var Parse=require('parse');



class MainGrid extends Component {
    state = {
        posts: [],
        pages: 0,
        offset: 0,
        currentPage: 0,
    };

    async componentDidMount() {
        const Posts = Parse.Object.extend("Posts");
        var query = new Parse.Query(Posts);
        query.descending("Date");
        const results = await query.find();
        let posts=[];
        for (let i = 0; i < results.length; i++) {
            posts.push({
                title: results[i].get("Title"),
                description: results[i].get("Description"),
                photo: results[i].get("Photo"),
                date: results[i].get("Date"),
                id: results[i].id,
            })
          }
          this.setState({
                posts: posts,
                pages: posts.length/4,
          })
          console.log(posts)
    };

    handlePageChange = page => {
        if( this.state.currentPage < page.selected ) {
            this.setState({
                offset: this.state.offset+4*(page.selected - this.state.currentPage),
                currentPage: page.selected,
            })
        } else {
            this.setState({
                offset: this.state.offset-4*(this.state.currentPage - page.selected),
                currentPage: page.selected,
            })
        }   
    }

    render () {
        return (
            <MuiThemeProvider theme={theme} >
                <Grid container spacing={8} >
                    <Grid item md={12} lg={12} xs={12} >
                        <Typography variant="h4" align="center" style={{marginBottom: "2%", background: "rgba(166, 166, 166, 0.4)", borderRadius: "4px", padding: "10px"}} >
                            Aktualności
                        </Typography> 
                    </Grid>
                {this.state.posts.slice( this.state.offset, this.state.offset+4 ).map(post => (
                        <NewsCards
                            title={post.title}
                            subheader={dateTranscription(post.date)}
                            description={post.description.substr(0,70)}
                            photo={post.photo[0]}
                            id={post.id}
                            key={post.title} />
                ))}
                   <Pagination 
                        pages={this.state.pages}
                        onPageChange={this.handlePageChange} />
                </Grid>
            </MuiThemeProvider>
        )
    }
}

export default MainGrid;