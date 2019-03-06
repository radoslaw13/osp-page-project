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
                    <Route exact path="osp-page-project/" component={MainPage} />
                    <Route path="osp-page-project/article/:id" component={Article} />
                    <Route path="osp-page-project/cars" component={CarsPage} />
                    <Route path="osp-page-project/history" component={HistoryPage} />
                    <Route path="osp-page-project/galery" component={GaleryPage} />
                    <Route path="osp-page-project/stats" component={StatsPage} />
                    <Footer />
                </div>
            </Router>
        )
    }
}

export default UserPage;
