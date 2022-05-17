import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Answers from './answers.jsx';

class QuestionList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {questions: [], moreAnswers: false };
    this.fetchData = this.fetchData.bind(this);
  }

  fetchData(options, cb) {
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
    let options = {
      method: 'GET',
      url: 'http://localhost:3000/question',
      params: {
        product_id: this.props.product_id
      }
    };


    this.fetchData(options, (data) => {
      this.setState({ questions: data });
    });

  }


  render() {
    let questionData = this.state.questions;
    if (this.props.showMore === false) {
      questionData = questionData.slice(0, 2);
    }


    return (
      <div className="questionList">
        <h5 id='question-header'>Product Questions</h5>
        <ul>
          {questionData.map((item) => {
            return (
              <li key={item.question_id}>
                <div className='question'>{item.question_body}
                  {/* show more details from question */}
                  <div className='answerList'>
                    <Answers question_id={item.question_id} />
                  </div>
                </div>

              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default QuestionList;