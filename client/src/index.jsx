import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-multi-carousel/lib/styles.css';
import Simple from './components/relatedItems&comparison/carousel.jsx';
import './components/relatedItems&comparison/related.css';
class Overview extends React.Component{
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div>
        <h1>Overview</h1>
      </div>
    )
  }
}

class Related extends React.Component{
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div className='exceptOverview'>
        <h1>Related Product</h1>
        <Simple />
      </div>
    )
  }
}
class Question extends React.Component{
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div>
        <h1>Question</h1>
      </div>
    )
  }
}

class Rating extends React.Component{
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div>
        <h1>Rating</h1>
      </div>
    )
  }
}



ReactDOM.createRoot(document.getElementById('Overview'))
.render(<Overview />);
ReactDOM.createRoot(document.getElementById('Question'))
.render(<Question />);
ReactDOM.createRoot(document.getElementById('Rating'))
.render(<Rating />);
ReactDOM.createRoot(document.getElementById('Related'))
.render(<Related />);

