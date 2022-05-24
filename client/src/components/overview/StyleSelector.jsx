import React from 'react';

class StyleSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h1>Style Selector</h1>
        {this.props.thumbnails
          ? this.props.thumbnails.map((i, id) => (
              <img
                className='overview-style-selector'
                id={id}
                key={'style' + id}
                src={i.thumbnail_url}
                onClick={this.props.changeStyle}
              ></img>
            ))
          : ''}
      </div>
    );
  }
}

export default StyleSelector;
