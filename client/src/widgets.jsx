import React from 'react';
import ReactDOM from 'react-dom/client';
import RelatedComponent from './components/relatedItems&comparison/relatedItems&comparison.jsx';
import QuestionList from './components/questions&answers/listQuestions.jsx'
import AppOverview from './components/overview/AppOverview.js';
import axios from 'axios';

export class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return (
      <AppOverview currentProductId={this.props.currentProductId}/>
    )
  }
}

export class Related extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log('this.props.currentProductId: ', this.props.currentProductId);
    return (
      <div>
        <RelatedComponent currentProductId={this.props.currentProductId} changeCurrentProductId={this.props.changeCurrentProductId} />
      </div>
    )
  }
}

export class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.handleInteraction = this.handleInteraction.bind(this);
  }

  handleInteraction (element, widget) {
    let date = new Date();
    let time = date.getTime(); //returns UTC time stamp;
    time = time.toString();

    axios.post('http://localhost:3000/interactions', {
      data: {
        element: element,
        widget: widget,
        time: time
      }
    })
      .then ((res) => {
        console.log('interaction status', res.status);
      })
      .catch((err) => {
        console.log(err.response.data);
      })
}


  render() {

    return (
      <div>
        <h1>Question</h1>
        <QuestionList product_id={this.props.currentProductId}
        handleInteraction={this.handleInteraction}/>
      </div>
    )
  }
}

export class Rating extends React.Component {
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


