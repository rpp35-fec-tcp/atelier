import React from 'react';

import Overview from './Overview.jsx';

class AppOverview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp';
  }

  render() {
    return (
      <Overview url={this.url} currentProduct={this.props.currentProductId} />
    );
  }
}

export default AppOverview;
