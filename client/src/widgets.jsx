import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import RelatedComponent from './components/relatedItems&comparison/relatedItems&comparison.jsx';
import QuestionList from './components/questions&answers/listQuestions.jsx'
import AppOverview from './components/overview/AppOverview.js';

export class Overview extends React.Component{
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

export class Related extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      // currentProductId: this.props.currentProductId
    }
  }
  render() {
    //console.log(this.props.currentProductId)
    return (
      <div>
        <RelatedComponent currentProductId={this.props.currentProductId} changeCurrentProductId={this.props.changeCurrentProductId}/>
      </div>
    )
  }
}

export class Questions extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      showMore: false
    };
  }

  //function to send a request to the server for questions data

  //invoke server req inside componentDidMount
  //then update state with res dataa

  render() {
    let sampleData = [{question:'someQuestion', answers: [{answer:'someAnswer'}, {answer: 'anotherAnswer'}]}, {question:'someQuestion2', answers: [{answer:'someAnswer2'}, {answer: 'anotherAnswer2'}]},
     {question:'someQuestion3', answers: [{answer:'someAnswer3'}, {answer: 'anotherAnswer3'}]}];
    let questionData = sampleData;
    if (this.state.showMore === false) {
      questionData = sampleData.slice(0,2);
    }

    return (
      <div>
        <h1>Question</h1>
        <QuestionList questions={questionData} />
      </div>
    )
  }
}
