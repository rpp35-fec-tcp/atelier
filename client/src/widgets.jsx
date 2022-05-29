/* eslint-disable react/prop-types */
/* eslint-disable max-classes-per-file */
import React from 'react';
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
      showMore: false,
    };
  }

  render() {
    return (
      <div>
        <h1>Question</h1>
        <QuestionList product_id={this.props.currentProductId} />
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
