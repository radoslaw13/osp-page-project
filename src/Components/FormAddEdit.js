import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Paper, 
    Grid, 
    Typography, 
    MuiThemeProvider,
    Button } from '@material-ui/core';
import Parse from 'parse';
import AddPhotoComponent from './AddPhotosComponent';
import { theme } from '../assets/styles/MainStyle';
import '../assets/css/AddPost.css';
import {dateFormat} from '../sripts/dateTranscription';

class AddEdit extends Component {
    state = {
        post: {
            photos: [],
            title: '',
            date: new Date(),
            description: '',
        },
    }

    componentDidMount()  {
        if(this.props.match) {
            this.getPosts()
        } else {
            return null
        }
    }

    async getPosts() {
        var article = Parse.Object.extend("Posts");
        var query = new Parse.Query(article);
        query.equalTo("objectId", `${this.props.match.params.id}`);
        var results = await query.find();
        this.setState({
            post: {
                title: results[0].get("Title"),
                description: results[0].get("Description"),
                date: results[0].get("Date"),
                photos: results[0].get("Photo"),
            },
        });
    }

    setupReader(inputFile) {
        return new Promise( (resolve, reject ) => {
            var reader = new FileReader();

            reader.onerror = () => {
                reject(alert("Blad przy dodawaniu zdjęć"));
            };

            reader.onload = async () => {
                resolve(await  this.resizeImage(reader.result));
            };

            reader.readAsDataURL(inputFile);
        })
    }
    
    resizeImage(result) {
        return new Promise((resolve, reject ) => {
            const img = new Image();
            img.src = result;
            img.onload = () => {
                const elem = document.createElement('canvas');
                const width = 1200;
                const scaleFactor = width / img.width;
                elem.width = width;
                elem.height = img.height * scaleFactor;
                const ctx = elem.getContext('2d');
                ctx.drawImage(img, 0, 0, width, img.height * scaleFactor);
                //resolve(fileList.push(ctx.canvas.toDataURL('image/jpeg', 0.8)));
                resolve( this.setState({
                    post: {
                        ...this.state.post,
                        photos: [
                            ...this.state.post.photos,
                            ctx.canvas.toDataURL('image/jpeg', 0.8)
                        ]
                    }
                }))
            };

            img.onerror = () => {
                reject(alert("Blad przy dodawaniu zdjęć"));
            }
        })
       
    }

    async getPhotos(event)  {
        var files = event.target.files;
        if ( files ) {
            for ( let i=0; i<files.length; i++ ) {
                await this.setupReader( files[i] )
            };
        };
    };

    handleChangeTitle(event) {
        this.setState({
            post: {
                ...this.state.post,
                title: event.target.value
            }
        })
    }
    handleChangeDate(event) {
        var data = new Date(event.target.value);
        this.setState({
            post: {
                ...this.state.post,
                date: data
            }
        })
    }
    handleChangeDescription(event) {
        this.setState({
            post: {
                ...this.state.post,
                description: event.target.value
            }
        })
    }

    handleChangeType(event) {
        this.setState({
            post: {
                ...this.state.post,
                type: event.target.value
            }
        })
        console.log(this.state.post)
    }

    update() {
        const { post } = this.state;
        var Post = Parse.Object.extend("Posts");
        var query = new Parse.Query(Post);
        query.equalTo('objectId', `${this.props.match.params.id}` );
        query.first().then( newPost => {
            
            newPost.set("Title", post.title);
            newPost.set("Date", post.date);
            newPost.set("Description", post.description);
            newPost.set("Photo", post.photos);
            newPost.set("Type", post.type);

            newPost.save().then(() => {
                alert("Post zapisano")
                console.log("Post zapisano")
            })
            .catch(() => {
                alert("Błąd zapisu")
            })
        })

    }

    save() {
        const { post } = this.state;
        const Post = Parse.Object.extend("Posts");
        const newPost = new Post();

        newPost.set("Title", post.title);
        newPost.set("Date", {"__type": "Date",
                        "iso": post.date.toISOString()});
        newPost.set("Description", post.description);
        newPost.set("Photo", post.photos);
        newPost.set("Type", post.type);

        newPost.save().then(() => {
            alert("Post zapisano")
            console.log("Post zapisano")
        })
        .catch(() => {
            alert("Błąd zapisu")
        })
    };

    chooseMainPhoto = ( index ) => {
        let mainPhoto = this.state.post.photos.splice(index, 1);
        this.state.post.photos.unshift(mainPhoto[0]);
        this.setState({
            post: {
                ...this.state.post,
                photos: this.state.post.photos
            },
        });
    };

    deletePhoto = ( index ) => {
        this.state.post.photos.splice(index, 1);
        this.setState({
            post: {
                ...this.state.post,
                photos: this.state.post.photos
            },
        });
    }

    render() {
        const { post } = this.state;
        return (
            <MuiThemeProvider theme={theme} >
                <Grid container spacing={8} >
                    <Grid item md={12} lg={12} xs={12} >
                        <Typography variant="h4"  align="center" style={{marginBottom: "2%", background: "rgba(166, 166, 166, 0.4)", borderRadius: "4px", padding: "10px"}}>
                            {this.props.addOrEdit}
                        </Typography>
                    </Grid>
                    <form onSubmit={this.props.saveOrUpdate === 'save' ? () => {this.save()} : () => {this.update()}} className="addForm">
                    <Grid container spacing={24} direction={'row'} >
                        <Grid item md={4} lg={4} xs={12} className="gridItem" >
                            <Typography variant="subtitle1"  align="center" >Tytuł</Typography>
                            <textarea className='textAreas' type="text" onChange={this.handleChangeTitle.bind(this)} value={post.title} required />
                        </Grid>
                        <Grid item md={4} lg={4} xs={12} className="gridItem" >
                            <Typography variant="subtitle1"  align="center" >Data</Typography>
                            <input className='textAreas' type="datetime-local" onChange={this.handleChangeDate.bind(this)} value={dateFormat(post.date)} required  />
                        </Grid>
                        <Grid item md={4} lg={4} xs={12} className="gridItem" >
                            <Typography variant="subtitle1"  align="center" >Wybierz typ posta</Typography>
                                <select className='textAreas' onChange={this.handleChangeType.bind(this)} defaultValue="" required>
                                    <option value="" disabled hidden>Wybierz typ posta</option>
                                    <option value="P" >Pożar</option>
                                    <option value="W" >Wypadek</option>
                                    <option value="MZI" >Miejscowe zagrożenie (inne)</option>
                                    <option value="D" >Drzewa</option>
                                    <option value="Pd" >Podtopienia/powodzie</option>
                                    <option value="C" >Ćwiczenia</option>
                                    <option value="I" >Post informacyjny</option>
                                </select>
                        </Grid>
                        <Grid item md={12} lg={12} xs={12} className="gridItem" >
                            <Typography variant="subtitle1"  align="center" >Treść</Typography>
                            <textarea className='textAreas' type="text" rows="12" onChange={this.handleChangeDescription.bind(this)} value={post.description} required />
                        </Grid>
                        <Grid item md={12} lg={12} xs={12} className="gridItem" >
                            <Typography variant="subtitle1"  align="center" >Dodaj zdjęcia</Typography>
                            <Paper><input type="file" multiple="true" onChange={(e) => {this.getPhotos(e)}}></input></Paper>
                        </Grid>
                        <Grid container spacing={24} direction={'row'} >
                            {post.photos.map( (image, index) => {
                                return <AddPhotoComponent 
                                            index={index} 
                                            image={image}
                                            mainPhotoFunc={() => {this.chooseMainPhoto(index)}}
                                            deleteFunc={() => {this.deletePhoto(index)}}
                                            key={index} />
                            })}
                        </Grid>
                        <Grid item md={12} lg={12} xs={12} className="gridItem" >
                            <div style={{display: 'block', margin: "0 auto"}}>
                                <Link to="/admin" style={{textDecoration: "none", color: "white", height: "100%"}}>
                                    <Button variant="outlined">Anuluj</Button>
                                </Link>
                                <Button >
                                    <input className="submitButton" type='submit' value={this.props.button} />
                                </Button>
                            </div>
                        </Grid>
                    </Grid>
                    </form>
                </Grid>
            </MuiThemeProvider>
        )
    }
}

export default AddEdit;