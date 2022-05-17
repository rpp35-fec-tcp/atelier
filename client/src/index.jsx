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
      questions: [],
      showMore: false,
      currentProduct_id: null
    };
    this.fetchQuestionData = this.fetchQuestionData.bind(this);
  }

  //function to send a request to the server for questions data
  fetchQuestionData (options) {
    axios(options)
      .then((res) => {
        console.log('data', res.data.results);
        this.setState({questions: res.data.results}, () => {
          console.log(this.state.questions);
        });
      })
      .catch((err) => {
        console.log('error in fetchQuestionData', err.response.data);
      })
  }

  componentDidMount () {
    let options = {
      method: 'GET',
      url: 'http://localhost:3000/question',
      params: {
        product_id: 71697
      }
    };
    this.fetchQuestionData(options);
  }

  // componentDidUpdate () {
  //   let options = {
  //     method: 'GET',
  //     url: 'http://localhost:3000/question',
  //     params: {
  //       product_id: 71697
  //     }
  //   };
  //   this.fetchQuestionData(options);
  // }

  render() {
    // let sampleData = [{question:'someQuestion', answers: [{answer:'someAnswer'}, {answer: 'anotherAnswer'}]}, {question:'someQuestion2', answers: [{answer:'someAnswer2'}, {answer: 'anotherAnswer2'}]},
    //  {question:'someQuestion3', answers: [{answer:'someAnswer3'}, {answer: 'anotherAnswer3'}]}];
    let questionData = this.state.questions;
    if (this.state.showMore === false) {
      questionData = questionData.slice(0,2);
    }

    return (
      <div>
        <h1>Question</h1>
        <QuestionList questions={questionData} />
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

