import React, { Component } from 'react';
import {Button, Typography} from '@material-ui/core';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import Admin from '../models/Admin';
import { userLoggedIn, setUserData } from '../store/actions';
import '../assets/css/LoginStyle.css';


class AdminLogin extends Component {
    state = {
        login: '',
        password: '',
    }

    login = () => {
        const {login, password} = this.state

        Admin.login(login, password)
            .then(() => {
                Admin.currentUser().then((user) => {
                    this.props.userLoggedIn()
                    this.props.setUserData(user)
                })
            })
        .catch(() => {
            alert("Nieprawidłowy login lub hasło!")
        })
    }

    

    handleChangeLogin(event) {
        let login = event.target.value;
        this.setState({
            login: login,
        })
    }
    handleChangePassword(event) {
        let password = event.target.value;
        this.setState({
            password: password,
        })
    }

    render() {

        return (
            <Router >
                <div className="mainDiv">
                <div className="loginWrapper">
                    <form className="form" onSubmit={() => {this.login()}}>
                        <Typography variant="body1" style={{color: "white"}}>Login:</Typography> 
                            <input onChange={this.handleChangeLogin.bind(this)}></input><br/>
                        <Typography variant="body1" style={{color: "white"}}>Hasło:</Typography> 
                            <input type="password" onChange={this.handleChangePassword.bind(this)}></input>
                        <div className="buttonDiv">
                            <Button style={{margin: "0 auto"}}><input className='submitButton' type="submit" value="Zaloguj" /></Button>
                        </div>
                    </form>
                </div>
                </div>
            </Router>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        userIsLogged: state.userIsLogged,
        user: state.user
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        userLoggedIn: () => dispatch(userLoggedIn()),
        setUserData: (user) => dispatch(setUserData(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminLogin)


