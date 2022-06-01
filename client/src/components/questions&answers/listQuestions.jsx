/* eslint-disable spaced-comment */
/* eslint-disable max-len */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/jsx-max-props-per-line */
/* eslint-disable react/jsx-first-prop-new-line */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable arrow-body-style */
/* eslint-disable react/button-has-type */
/* eslint-disable semi */
/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable comma-dangle */
/* eslint-disable react/prop-types */
/* eslint-disable react/sort-comp */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/extensions */
import React from 'react';
import axios from 'axios';
import Answers from './answers.jsx';
import AnswerModal from './answerQuestion.jsx';
import QuestionModal from './askQuestion.jsx';
import './listQuestions.css';

class QuestionList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      showMore: false,
      showQuestionModal: false,
      showAnswerModal: false
    };

    this.fetchQuestionData = this.fetchQuestionData.bind(this);
    this.handleShowMoreClick = this.handleShowMoreClick.bind(this);
    this.handleUpvoteClick = this.handleUpvoteClick.bind(this);
    this.handleReportClick = this.handleReportClick.bind(this);
    this.showOrHideAnswerModal = this.showOrHideAnswerModal.bind(this);
    this.showOrHideQuestionModal = this.showOrHideQuestionModal.bind(this);
  }

  // eslint-disable-next-line no-unused-vars
  showOrHideAnswerModal(id) {
    // this.props.handleInteraction(id, 'QuestionList');
    this.setState({ showAnswerModal: !this.state.showAnswerModal });
  }

  // eslint-disable-next-line no-unused-vars
  showOrHideQuestionModal(id) {
    // this.props.handleInteraction(id, 'QuestionList');
    this.setState({ showQuestionModal: !this.state.showQuestionModal });
  }

  handleReportClick(id, name) {
    // eslint-disable-next-line no-undef
    document.getElementById(id).disabled = true;
    this.props.handleInteraction(id, 'QuestionList');

    axios.put('http://localhost:3000/question/reportQuestion', {
      params: {
        question_id: name
      }
    })
      .then(() => {
        console.log('reported question');
      })
      .catch((err) => {
        console.log('client side error report question', err.response.data);
      })
  }

  handleShowMoreClick(id) {
    const text = document.getElementById(id);
    this.setState({ showMore: !this.state.showMore }, () => {
      if (this.state.showMore) {
        text.innerHTML = 'COLLAPSE QUESTIONS';
      } else {
        text.innerHTML = 'MORE ANSWERED QUESTIONS';
      }
    })
    this.props.handleInteraction('moreQuestions', 'QuestionList');
  }

  handleUpvoteClick(id) {
    document.getElementById(id).disabled = true;
    this.props.handleInteraction(id, 'QuestionList');

    console.log(id);
    axios.put('http://localhost:3000/question/upvoteQuestionHelpful', {
      params: {
        question_id: id
      }
    })
      .then(() => {
        console.log('upvoted question');
      })
      .catch((err) => {
        console.log('client side error upvoting question helpfulness', err.response.data);
      })
  }

  fetchQuestionData(cb) {
    const options = {
      method: 'GET',
      url: 'http://localhost:3000/question',
      params: {
        product_id: this.props.product_id
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
    if (this.props.product_id !== prevProps.product_id) {
      this.fetchQuestionData((data) => {
        this.setState({ questions: data });
      });
    }
  }

  render() {
    let questionData = this.state.questions;
    // sort by helpfulness
    questionData.sort((a, b) => {
      if (a.question_helpfulness > b.question_helpfulness) {
        return -1;
      } if (a.question_helpfulness < b.question_helpfulness) {
        return 1;
      }
      return 0;
    });

    // show only two questions until "show more" is clicked
    if (this.state.showMore === false) {
      questionData = questionData.slice(0, 2);
    }

    // edge case for no question data
    if (questionData.length === 0) {
      return (
        <div className="no-questions">
          <h4>Sorry, there are no questions listed for this product</h4>
          <button id="addAQuestion" onClick={(e) => this.showOrHideQuestionModal(e.target.id)}>ADD A QUESTION +</button>
        </div>
      )
    }

    return (
      <div className="question-main">
        <ul className="questionList">
          {questionData.map((item) => {
            return (
              <li className="oneQuestion" key={item.question_id}>
                <AnswerModal
                  show={this.state.showAnswerModal}
                  close={this.showOrHideAnswerModal}
                  question_id={item.question_id}
                />
                <QuestionModal
                  show={this.state.showQuestionModal}
                  close={this.showOrHideQuestionModal}
                  product_id={this.props.product_id}
                />
                <small className="question-helpfulness">  Helpful?
                  <button className="upvote-helpfulness" id={item.question_id}
                    onClick={(e) => this.handleUpvoteClick(e.target.id)}>Yes</button>
                  ({item.question_helpfulness})
                  { /* <button className="report-question" id={item.question_id + "report"}
                   name={item.question_id}
                  onClick={(e) => this.handleReportClick(e.target.id, e.target.name)}>Report</button>*/ }
                  <button id="addAnAnswer" onClick={(e) => this.showOrHideAnswerModal(e.target.id)}>Add Answer</button>
                </small>
                <div className="question">Q: {item.question_body}
                  <div className="answerList">
                    <Answers question_id={item.question_id} handleInteraction={this.props.handleInteraction} />
                  </div>
                </div>

              </li>
            )
          })}
        </ul>
        <button id="moreQuestions" onClick={(e) => this.handleShowMoreClick(e.target.id)}>MORE ANSWERED QUESTIONS</button>
        <button id="addAQuestion" onClick={(e) => this.showOrHideQuestionModal(e.target.id)}>ADD A QUESTION +</button>
      </div>
    )
  }
}

export default QuestionList
