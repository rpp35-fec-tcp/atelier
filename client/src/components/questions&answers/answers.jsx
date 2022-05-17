import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class Answers extends React.Component{
  constructor (props) {
    super(props);
    this.state = {answers: []}
    this.fetchAnswerData = this.fetchAnswerData.bind(this);
  }

  fetchAnswerData (options, cb) {
    axios(options)
      .then((res) => {
       console.log('answers', res.data);
      })
      .catch((err) => {
        console.log('error in fetchAnswerData', err.response.data);
      })
  }

  componentDidMount () {
    let options = {
      method: 'GET',
      url: 'http://localhost:3000/question/answers',
      params: {
        question_id: this.props.question_id
      }
    };

    this.fetchAnswerData(options, (data) => {
      this.setState({answers: data}, () => {
        console.log('answer data', this.state.answers);
      });
    });
  }


  render () {
    console.log('question id', this.props.question_id);

  }

};

export default Answers;