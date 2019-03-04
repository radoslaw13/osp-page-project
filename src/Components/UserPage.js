import React, { Component } from 'react';
import {
  BrowserRouter as Router, 
  Route} from 'react-router-dom';
  import Menu from './Menu';
import MainPage from './MainPage';
import Slideshow from './Slider';
import Article from './Article';
import Footer from './Footer';
import CarsPage from './CarsPage';
import HistoryPage from './HistoryPage';
import GaleryPage from './GaleryPage';
import StatsPage from './StatsPage';


class UserPage extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Menu />
                    <Slideshow />
                    <Route exact path="/" component={MainPage} />
                    <Route path="/article/:id" component={Article} />
                    <Route path="/cars" component={CarsPage} />
                    <Route path="/history" component={HistoryPage} />
                    <Route path="/galery" component={GaleryPage} />
                    <Route path="/stats" component={StatsPage} />
                    <Footer />
                </div>
            </Router>
        )
    }
}

export default UserPage;
