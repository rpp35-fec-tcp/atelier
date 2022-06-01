/* eslint-disable no-console */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/extensions */
/* eslint-disable max-classes-per-file */
import React from 'react';
import axios from 'axios';
import RelatedComponent from './components/relatedItems&comparison/relatedItems&comparison.jsx';
import QuestionList from './components/questions&answers/listQuestions.jsx';
import AppOverview from './components/overview/AppOverview.js';
import './components/questions&answers/questions.css';

export class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <AppOverview currentProductId={this.props.currentProductId} />
    );
  }
}

export class Related extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <RelatedComponent
          currentProductId={this.props.currentProductId}
          changeCurrentProductId={this.props.changeCurrentProductId}
        />
      </div>
    );
  }
}

export class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.handleInteraction = this.handleInteraction.bind(this);
  }

  // eslint-disable-next-line class-methods-use-this
  handleInteraction(element, widget) {
    const date = new Date();
    let time = date.getTime(); // returns UTC time stamp;
    time = time.toString();

    axios.post('http://localhost:3000/interactions', {
      data: {
        element,
        widget,
        time,
      },
    })
      .then((res) => {
        console.log('interaction status', res.status);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }

  render() {
    return (
      <div id="questionContainer">
        <h5 className="questionsHeader">Questions & Answers</h5>
        <QuestionList
          product_id={this.props.currentProductId}
          handleInteraction={this.handleInteraction}
        />
      </div>
    );
  }
}

export class Rating extends React.Component {
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
