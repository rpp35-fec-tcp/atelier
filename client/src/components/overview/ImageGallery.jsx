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
      <div className='image-gallery'>
        <button classname='image-gallery-buttons' id='back' onClick={this.props.changePhoto}>
          ←
        </button>
        <img className='imgae-gallery-item' src={this.props.photoURL}></img>
        <button classname='image-gallery-buttons' id='forward' onClick={this.props.changePhoto}>
          →
        </button>
      </div>
    );
  }
}

export default ImageGallery;
