import React, {Component} from 'react';
import logo from '../Images/logo.png';
import {Link} from 'react-router-dom';

class Logo extends Component {
    render () {
        return (
            <div className="logo-container" style={{maxWidth: "300px", margin: "0 auto", display: "block"}} >
                <Link to="/osp-page-project/"><img src={logo} alt={"logo"}  width="100%"  ></img></Link>
            </div>
        )
    }
};

export default Logo;