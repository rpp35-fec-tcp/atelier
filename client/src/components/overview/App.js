import React from 'react';

import Overview from './Overview.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProduct: 71697,
    };
    this.url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp';
  }

  render() {
    return (
      <Overview url={this.url} currentProduct={this.state.currentProduct} />
    );
  }
}

export default App;
