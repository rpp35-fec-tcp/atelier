/* eslint-disable react/self-closing-comp */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/jsx-max-props-per-line */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/button-has-type */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable no-console */
/* eslint-disable comma-dangle */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-undef */

import React from 'react';
import axios from 'axios';
import './answers.css';

class Answers extends React.Component {
  constructor(props) {
    super(props);
    this.state = { answers: [], moreAnswers: false };

    this.fetchAnswerData = this.fetchAnswerData.bind(this);
    this.dateConverter = this.dateConverter.bind(this);
    this.handleMoreAnswersClick = this.handleMoreAnswersClick.bind(this);
    this.handleUpvoteClick = this.handleUpvoteClick.bind(this);
    this.handleReportClick = this.handleReportClick.bind(this);
  }

  handleReportClick(id, name) {
    document.getElementById(id).disabled = true;
    this.props.handleInteraction(id, 'Answers');

    axios.put('http://localhost:3000/question/reportAnswer', {
      params: {
        answer_id: name
      }
    })
      .then(() => {
        console.log('reported answer');
      })
      .catch((err) => {
        console.log('client side error report answer', err.response.data);
      });
  }

  handleUpvoteClick(id) {
    document.getElementById(id).disabled = true;
    this.props.handleInteraction(id, 'Answers');

    axios.put('http://localhost:3000/question/upvoteAnswerHelpful', {
      params: {
        answer_id: id,
      },
    })
      // .then((res) => {
      //   console.log('upvoted answer');
      // })
      .catch((err) => {
        console.log('client side error upvoting answer helpfulness', err.response.data);
      });
  }

  handleMoreAnswersClick(id) {
    const text = document.getElementById(id);
    if (!this.state.moreAnswers) {
      text.innerHTML = 'COLLAPSE ANSWERS';
    } else {
      text.innerHTML = 'LOAD MORE ANSWERS';
    }
    this.props.handleInteraction('moreAnswers', 'Answers');
    this.setState({ moreAnswers: !this.state.moreAnswers }, () => {
        if (this.state.moreAnswers) {
          text.innerHTML = 'COLLAPSE ANSWERS';
        } else {
          text.innerHTML = 'LOAD MORE ANSWERS';
        }
      });
  }

  fetchAnswerData(options, cb) {
    axios(options)
      .then((res) => {
        cb(res.data);
      })
      .catch((err) => {
        console.log('error in fetchAnswerData', err.response.data);
      });
  }

  dateConverter(UTC) {
    let date = new Date(UTC);
    date = date.toLocaleString();
    return date;
  }

  // eslint-disable-next-line react/sort-comp
  componentDidMount() {
    const options = {
      method: 'GET',
      url: 'http://localhost:3000/question/answers',
      params: {
        question_id: this.props.question_id,
      },
    };

    this.fetchAnswerData(options, (data) => {
      this.setState({ answers: data.results });
    });
  }

  render() {
    let answerData = this.state.answers;

    answerData.sort((a, b) => {
      if (a.helpfulness > b.helpfulness) {
        return -1;
      } if (a.helpfulness > b.helpfulness) {
        return 1;
      }
      return 0;
    });

    if (this.state.moreAnswers === false) {
      answerData = answerData.slice(0, 2);
    }

    if (answerData.length === 0) {
      return (
        <div className="no-answers">
          <h6>Be the first to answer this question!</h6>
        </div>
      );
    }

    return (
      <div className="answers">
        <ul>
          {answerData.map((item) => (
            <li className="oneAnswer" key={item.answer_id}>
              <span className="answerBody">
                A: {item.body}
              </span>
              <br />
              <span className="sub-answer">

                <span className="answerer-name/time">
                  <small className="answerer-name">
                    by
                    {item.answerer_name}
                    ,
                    {' '}
                  </small>
                  <small className="answer-time">{this.dateConverter(item.date)}</small>
                </span>
                <small className="answer-helpfulness">
                  {' '}
                  Helpful?
                  <button
                    className="upvote-helpfulness"
                    id={item.answer_id}
                    onClick={(e) => this.handleUpvoteClick(e.target.id)}
                  >
                    Yes
                  </button>
                  (
                  {item.helpfulness}
                  )
                </small>
                <small>
                  <button
                    className="report-answer"
                    id={`${item.answer_id}report`}
                    name={item.answer_id}
                    onClick={(e) => this.handleReportClick(e.target.id, e.target.name)}
                  >
                    Report
                  </button>
                </small>
              </span>
            </li>
          ))}
        </ul>
        <button className="moreAnswers" id={`${this.props.question_id}moreAnswers`}
        onClick={(e) => this.handleMoreAnswersClick(e.target.id)}>LOAD MORE ANSWERS</button>
      </div>
    );
  }
}

export default Answers;
