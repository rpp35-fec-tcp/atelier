import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Answers from './answers.jsx';

class QuestionList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { questions: [], moreAnswers: false };
    this.fetchQuestionData = this.fetchQuestionData.bind(this);
  }

  fetchQuestionData(cb) {
    let options = {
      method: 'GET',
      url: 'http://localhost:3000/question',
      params: {
        product_id: this.props.product_id
      }
    };
    axios(options)
      .then((res) => {
        // console.log('data', res.data.results);
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
    if (this.props.product_id !== prevProps.product_id) {
      this.fetchQuestionData((data) => {
        this.setState({ questions: data });
      });
    }
  }

  render() {
    let questionData = this.state.questions;
    //sort by helpfulness
    questionData.sort((a, b) => {
      if (a.question_helpfulness > b.question_helpfulness) {
        return -1;
      } else if (a.question_helpfulness < b.question_helpfulness) {
        return 1;
      } else {
        return 0;
      }
    });

    //show only two questions until "show more" is clicked
    if (this.props.showMore === false) {
      questionData = questionData.slice(0, 2);
    }


    return (
      <div className="questionList">
        <h4 id='question-header'>Q: </h4>
        <ul>
          {questionData.map((item) => {
            return (
              <li key={item.question_id}>
                <div className='question'>{item.question_body}
                  {/* show more details from question */}
                  <div className='answerList'>
                    <Answers question_id={item.question_id}
                      moreAnswers={this.state.moreAnswers} />
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