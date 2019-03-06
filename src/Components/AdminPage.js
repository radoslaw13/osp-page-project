import React, { Component } from 'react';
import {
  Router, 
  Route} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'
import ManagePosts from './ManagePosts';
import { connect } from 'react-redux';
import { userLoggedIn, userLoggedOut, setUserData  } from '../store/actions';
import Add from './Add';
import Admin from '../models/Admin';
import Edit from './Edit';
import Parse from 'parse';
import AdminLogin from './AdminLogin';
import AdminAppBar from './AdminAppBar';
Parse.serverURL="https://parseapi.back4app.com/";
Parse.initialize("qHdX8iiNMVDSoFqaJLiZSDoXzx5iGhtWoToeJVWl","u959IGS9u9R7wkiVPNpWJVDaSRER4jLCg6kzKy8h");



const history = createBrowserHistory()

class AdminPage extends Component {

    isLogged = () => {
        Admin.currentUser().then((user) => {
            if (user) {
                this.props.userLoggedIn()
                this.props.setUserData(user)
            } else {
                this.props.userLoggedOut()
            }
        })
    }

    componentDidMount() {
        this.isLogged();
    }

    render() {
        return (
            <Router history={history}>
                <div>
                    <AdminAppBar />
                    {this.props.userIsLogged ? <Route history={history} exact path="/osp-page-project/admin" component={ManagePosts} /> : <Route component={AdminLogin} />}
                    {this.props.userIsLogged ? <Route history={history} exact path="/osp-page-project/admin/dodaj" component={Add} /> : null}
                    {this.props.userIsLogged ? <Route history={history} exact path="/osp-page-project/admin/edit/:id" component={Edit} /> : null}
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
        userLoggedOut: () => dispatch(userLoggedOut()),
        setUserData: (user) => dispatch(setUserData(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminPage);
