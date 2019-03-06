import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';


class SimpleMenuButton extends React.Component {
  
  scrollToHeight = () => {
    var menu = document.getElementById('menu').offsetHeight;
    var slider = document.getElementById('slider').offsetHeight;
    window.scrollTo(0, menu + slider);
  }

  render() {
    return (
        <Link style={{textDecoration: "none", width: "100%", margin: "0 auto"}} to={`/osp-page-project/${this.props.path}`} >
          <Button
            fullWidth={true}
            onClick={() => {this.scrollToHeight()}}
          >
            {this.props.heading}
          </Button>
        </Link>
    );
  }
}


export default SimpleMenuButton;