/* eslint-disable react/prop-types */
/* eslint-disable max-classes-per-file */
import React from 'react';
import axios from 'axios';
import RelatedComponent from './components/relatedItems&comparison/relatedComponent';
import QuestionList from './components/questions&answers/listQuestions';
import AppOverview from './components/overview/AppOverview';

export function Overview({ currentProductId }) {
  return (
    <AppOverview currentProductId={currentProductId} />
  );
}

export function Related({ currentProductId, changeCurrentProductId }) {
  return (
    <div>
      <RelatedComponent
        currentProductId={currentProductId}
        changeCurrentProductId={changeCurrentProductId}
      />
    </div>
  );
}
export class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.handleInteraction = this.handleInteraction.bind(this);
  }

  handleInteraction (element, widget) {
    const date = new Date();
    let time = date.getTime(); //returns UTC time stamp;
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
      <div>
        <h1>Question</h1>
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
