import React, { Component } from 'react';
import { userLoggedOut, setUserData  } from '../store/actions';
import { connect } from 'react-redux'
import {Button, Typography} from '@material-ui/core';
import Admin from '../models/Admin';

class AdminAppBar extends Component {
    
    renderLogoutButton = () => {
        return (
            <div style={{position: "absolute", right: "10px", bottom: "10px"}}>
                <Button style={{color: 'white'}} onClick={() => {this.logout()}}>
                    Wyloguj
                </Button>
            </div>
        )
    }

    logout = () => {
        Admin.logOut()
        .then(() => {
            this.props.userLoggedOut();
            this.props.setUserData(null)
            console.log("Wylogowano");
        })
        .catch(() => {
            alert("Nikt nie jest zalogowany")
        })
    }

    render() {
        return (
            <div style={{backgroundColor: "rgba(77, 77, 77, 0.4)", borderRadius: "0 0 3% 3%", position: "relative", height: "50px", padding: "6px"}}>
                <Typography variant="h5" style={{position: "absolute", color: "white", left: "20px", bottom: "10px"}}>Panel administratora</Typography>
                {this.props.userIsLogged ? this.renderLogoutButton() : null}
            </div>
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
        userLoggedOut: () => dispatch(userLoggedOut()),
        setUserData: (user) => dispatch(setUserData(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminAppBar);