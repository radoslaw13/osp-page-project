import React, { Component } from 'react';
import ImgsViewer from 'react-images-viewer';


 class PhotoViewer extends Component {
        state = {
            currImg: 0,
        }

    
    gotoNext = () => {
        this.setState({
            currImg: this.state.currImg+1,
        })
    }

    gotoPrev = () => {
        this.setState({
            currImg: this.state.currImg-1,
        })
    }

    thumbnailFunc = (x) => {
        this.setState({
            currImg: x,
        })
    }
  render() {
    return (
      <ImgsViewer
        imgs={this.props.images}
        isOpen={this.props.openViewer}
        onClose={this.props.closeViewer}
        currImg={this.state.currImg}
        onClickNext={this.gotoNext}
        onClickPrev={this.gotoPrev}
        backdropCloseable={true}
        closeBtnTitle={"Zamknij"}
        leftArrowTitle={'Poprzednie zdjęcie'}
        rightArrowTitle={"Następne zdjęcie"}
        onClickThumbnail={this.thumbnailFunc}
        showThumbnails={true}
      />
    )
  }
}
export default PhotoViewer;