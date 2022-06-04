/* eslint-disable no-undef */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Overview, Related, Questions } from './widgets';
import Reviews from './components/reviews/Reviews';

class App extends React.Component {
  constructor(props) {
    super(props);
    // console.log(window.location.pathname)
    this.state = {
      currentProductId: 71697,
    };
    this.changeCurrentProductId = this.changeCurrentProductId.bind(this);
    this.changeURL = this.changeURL.bind(this);
  }

  changeURL() {
    const nextURL = `/id/${this.state.currentProductId}`;
    const nextTitle = `Product ${this.state.currentProductId}`;
    const nextState = { additionalInformation: 'Updated the URL with JS' };
    window.history.replaceState(nextState, nextTitle, nextURL);
  }

  changeCurrentProductId(id) {
    this.setState({
      currentProductId: id,
    }, () => this.changeURL());
  }

  render() {
    return (
      <div>
        <Overview
          currentProductId={this.state.currentProductId}
          changeCurrentProductId={this.changeCurrentProductId}
        />
        <Related
          currentProductId={this.state.currentProductId}
          changeCurrentProductId={this.changeCurrentProductId}
        />
        <Questions currentProductId={this.state.currentProductId} />
        <Reviews currentProductId={this.state.currentProductId} />
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
