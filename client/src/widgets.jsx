import React from 'react';
import ReactDOM from 'react-dom/client';
import RelatedComponent from './components/relatedItems&comparison/relatedItems&comparison.jsx';
import QuestionList from './components/questions&answers/listQuestions.jsx'
import AppOverview from './components/overview/AppOverview.js';

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
      showMore: false
    };
  }


  render() {

    return (
      <div>
        <h1>Question</h1>
        <QuestionList product_id={this.props.currentProductId}/>
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


