import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './components/relatedItems&comparison/card.jsx';
import App from './components/overview/App.js';

class ProductOverview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <App />;
  }
}

class Related extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h1>Related Product</h1>
        <Card />
      </div>
    );
  }
}
class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h1>Question</h1>
      </div>
    );
  }
}

class Rating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h1>Rating</h1>
      </div>
    );
  }
}

ReactDOM.createRoot(document.getElementById('Overview')).render(
  <ProductOverview />
);
ReactDOM.createRoot(document.getElementById('Question')).render(<Question />);
ReactDOM.createRoot(document.getElementById('Rating')).render(<Rating />);
ReactDOM.createRoot(document.getElementById('Related')).render(<Related />);
