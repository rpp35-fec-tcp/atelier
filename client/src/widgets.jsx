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
import SearchQuestion from './components/questions&answers/searchQuestions.jsx';
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
      questions: [],
      filteredQuestions: []
    };
    this.handleInteraction = this.handleInteraction.bind(this);
    this.fetchQuestionData = this.fetchQuestionData.bind(this);
    this.questionFilter = this.questionFilter.bind(this);
  }

  questionFilter (filterString) {
    const filtered = this.state.questions.filter((item) =>
      item.question_body.includes(filterString)
    )

    this.setState({filteredQuestions: filtered});
  }

  fetchQuestionData(cb) {
    const options = {
      method: 'GET',
      url: 'http://localhost:3000/question',
      params: {
        product_id: this.props.currentProductId
      }
    };
    axios(options)
      .then((res) => {
        console.log('data', res.data.results);
        cb(res.data.results);
      })
      .catch((err) => {
        console.log('error in fetchQuestionData', err.response.data);
      })
  }

  componentDidMount() {
    this.fetchQuestionData((data) => {
      this.setState({ questions: data });
    });
  }

  componentDidUpdate(prevProps) {
    if (this.props.currentProductId !== prevProps.currentProductId) {
      this.fetchQuestionData((data) => {
        this.setState({ questions: data });
      });
    }
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
    let filteredQuestions = this.state.questions;
    if (this.state.filteredQuestions.length !== 0) {
      filteredQuestions = this.state.filteredQuestions;
    }

    return (
      <div id="questionContainer">
        <h5 className="questionsHeader">Questions & Answers</h5>
        <SearchQuestion
          questions={this.state.questions}
          questionFilter={this.questionFilter}
        />
        <QuestionList
          product_id={this.props.currentProductId}
          handleInteraction={this.handleInteraction}
          questions={filteredQuestions}
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
