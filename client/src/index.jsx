import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './components/relatedItems&comparison/card.jsx';
import QuestionList from './components/questions&answers/listQuestions.jsx';
import axios from 'axios';


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
      <div>
        <h1>Related Product</h1>
        <Card />
      </div>
    )
  }
}

class Questions extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      showMore: false,
      currentProduct_id: null
    };
  }

  render() {

    return (
      <div>
        <h1>Question</h1>
        {/* change product_id prop to this.state.currentProduct_id */}
        <QuestionList product_id={71697} showMore={this.state.showMore} />
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
.render(<Questions />);
ReactDOM.createRoot(document.getElementById('Rating'))
.render(<Rating />);
ReactDOM.createRoot(document.getElementById('Related'))
.render(<Related />);

