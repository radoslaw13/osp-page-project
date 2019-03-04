import React, { Component } from 'react';
import {
  BrowserRouter as Router, 
  Route} from 'react-router-dom';
import UserPage from './UserPage';
import AdminPage from './AdminPage';
import '../assets/css/App.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Parse from 'parse';
import reducers from '../store/reducers';
Parse.serverURL="https://parseapi.back4app.com/";
Parse.initialize("qHdX8iiNMVDSoFqaJLiZSDoXzx5iGhtWoToeJVWl","u959IGS9u9R7wkiVPNpWJVDaSRER4jLCg6kzKy8h");

const store = createStore(reducers);

class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <Router>
          <div className="App">
          <UserPage />
            <Route exact path="/" component={UserPage} />
            <Route exact path="/admin" component={AdminPage} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
