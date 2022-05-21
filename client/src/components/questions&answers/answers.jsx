import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class Answers extends React.Component {
  constructor(props) {
    super(props);
    this.state = { answers: [], moreAnswers: false }

    this.fetchAnswerData = this.fetchAnswerData.bind(this);
    this.dateConverter = this.dateConverter.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick () {
    this.setState({moreAnswers: !this.state.moreAnswers});
  }

  fetchAnswerData(options, cb) {
    axios(options)
      .then((res) => {
        cb(res.data);
      })
      .catch((err) => {
        console.log('error in fetchAnswerData', err.response.data);
      })
  }

  dateConverter (UTC) {
    let date = new Date(UTC)
    date = date.toLocaleString();
    return date;
  }

  componentDidMount() {
    let options = {
      method: 'GET',
      url: 'http://localhost:3000/question/answers',
      params: {
        question_id: this.props.question_id
      }
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
      } else if (a.helpfulness > b.helpfulness) {
        return 1;
      } else {
        return 0;
      }
    });

    if (this.state.moreAnswers === false) {
      answerData = answerData.slice(0, 2);
    }

    if (answerData.length === 0) {
      return (
        <div className="no-answers">
          <h4>Be the first to answer this question!</h4>
        </div>
      )
    }


    return (
      <div className='answers'>
        <ul>
          {answerData.map((item) => {
            return (
              <li key={item.answer_id}>
                <h4 id='answer-header'>A:</h4>
                <span  className='answerBody'>{item.body}</span>
                <div className='answerer-name/time'>
                  <small className='answerer-name'>{item.answerer_name}</small>
                  <small className='answer-time'>{this.dateConverter(item.date)}</small>
                </div>
              </li>
            )
          })}
        </ul>
        <button id="moreAnswers" onClick={this.handleClick}>LOAD MORE ANSWERS</button>
      </div>
    )

  }

};

export default Answers;