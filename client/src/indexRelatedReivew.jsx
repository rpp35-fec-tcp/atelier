import React from 'react';
import ReactDOM from 'react-dom';

class Related extends React.Component{
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div>
        <h1>Related Product</h1>
      </div>
    )
  }
}

ReactDOM.render(<Related />, document.getElementById('Related'));