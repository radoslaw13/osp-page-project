import React, { Component } from 'react';
import {Grid, 
    Typography, 
    MuiThemeProvider,
    Button} from '@material-ui/core';
import { Link } from 'react-router-dom';
import Parse from 'parse';
import { theme } from '../assets/styles/MainStyle';
import ManagePostPanel from './ManagePostPanel';
import { dateTranscription } from '../sripts/dateTranscription';
import MyDialog from './MyDialog';

class ManagePosts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            open: false,
            index: null,
        }
    }

    componentDidMount() {
        const Posts = Parse.Object.extend("Posts");
        var query = new Parse.Query(Posts);
        query.descending("Date");
        let postsArr = [];
        query.find().then(results => {
            results.map( post => {
                return postsArr.push({
                    title: post.get("Title"),
                    description: post.get("Description"),
                    date: post.get("Date"),
                    id: post.id,
                })
            })
            this.setState({
                posts: postsArr,
            })
        })
    };

    handleOpenDialog = (index) => {
        this.setState({
            open: true,
            index: index
        })
    }

    handleCloseDialog = () => {
        this.setState({
            open: false,
            index: null
        })
    }

    handleDelete(index) {
        const Post = Parse.Object.extend('Posts');
        var query = new Parse.Query(Post);
        query.get(`${this.state.posts[index].id}`).then( toDelete => {
            toDelete.destroy();
        })
        let tempArr = this.state.posts;
        tempArr.splice(index, 1);
        this.setState({
            posts: tempArr,
            open: false,
        })
    }


    render() {
        return (
            <div>
            <MuiThemeProvider theme={theme} >
                <Grid container spacing={8} >
                    <Grid item md={12} lg={12} xs={12} >
                        <Typography variant="h4"  align="center" style={{marginBottom: "2%", background: "rgba(166, 166, 166, 0.4)", borderRadius: "4px", padding: "10px"}}>
                            Zarządzaj postami lub dodaj nowe
                        </Typography>
                    </Grid>
                    <Grid item md={12} lg={12} xs={12} style={{marginBottom: "2%"}} >
                        <Link to="/osp-page-project/admin/dodaj" style={{textDecoration: "none", color: "white"}}>
                            <Button fullWidth={true}>Dodaj nowy post</Button>
                        </Link>
                    </Grid>
                    <Grid container spacing={16} >
                        {this.state.posts.length > 0 ? this.state.posts.map( (post, index) => {
                            return <ManagePostPanel 
                                        title={post.title}
                                        date={dateTranscription(post.date)}
                                        description={post.description.substr(0,70)}
                                        id={post.id}
                                        key={post.title}
                                        deleteFoo={() => {this.handleOpenDialog(index)}} /> }) : null }
                            
                    </Grid>
                </Grid>
            </MuiThemeProvider>
            <MyDialog 
                    dialogTitle="Czy na pewno checsz usunąć ten post?"
                    dialogText="Usunięcie postu jest nieodwracalne!"
                    open={this.state.open}
                    onClose={this.handleCloseDialog}
                    onAgree={() => {this.handleDelete(this.state.index)}}
                    buttonOnAgree="Usuń"
                    buttonOnDisagree="Anuluj"
            />
            </div>
        )
    }
}

export default ManagePosts;