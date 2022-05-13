import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './components/relatedItems&comparison/card.jsx';
import QuestionList from './components/questions&answers/listQuestions.jsx';


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
      questions: [],
      showMore: false
    };
  }

  //function to send a request to the server for questions data

  //invoke server req inside componentDidMount
  //then update state with res dataa

  render() {
    let sampleData = [{question:'someQuestion', answers: [{answer:'someAnswer'}, {answer: 'anotherAnswer'}]}, {question:'someQuestion2', answers: [{answer:'someAnswer2'}, {answer: 'anotherAnswer2'}]}]
    return (
      <div>
        <h1>Question</h1>
        <QuestionList questions={sampleData} />
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

