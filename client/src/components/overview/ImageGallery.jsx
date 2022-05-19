import React from 'react';

class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUrl: '',
    };
  }
  render() {
    return (
      <div>
        <button id='back' onClick={this.props.changePhoto}>
          ←
        </button>
        <img className='gallery' src={this.props.photoURL}></img>
        <button id='forward' onClick={this.props.changePhoto}>
          →
        </button>
      </div>
    );
  }
}

export default ImageGallery;
