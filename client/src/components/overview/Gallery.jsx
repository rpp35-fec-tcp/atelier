import React from 'react';

class Gallery extends React.Component {
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
        <img className='gallery' src={this.props.photo}></img>
        <button id='forward' onClick={this.props.changePhoto}>
          →
        </button>
      </div>
    );
  }
}

export default Gallery;
