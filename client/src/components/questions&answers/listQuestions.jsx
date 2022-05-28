import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Answers from './answers.jsx';
import AnswerModal from './answerQuestion.jsx';
import QuestionModal from './askQuestion.jsx';

class QuestionList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { questions: [],
      showMore: false,
      showQuestionModal: false,
      showAnswerModal: false};

    this.fetchQuestionData = this.fetchQuestionData.bind(this);
    this.handleShowMoreClick = this.handleShowMoreClick.bind(this);
    this.handleUpvoteClick = this.handleUpvoteClick.bind(this);
    this.handleReportClick = this.handleReportClick.bind(this);
    this.showOrHideAnswerModal = this.showOrHideAnswerModal.bind(this);
    this.showOrHideQuestionModal = this.showOrHideQuestionModal.bind(this);
  }

  showOrHideAnswerModal (id) {
    // this.props.handleInteraction(id, 'QuestionList');
    this.setState({showAnswerModal: !this.state.showAnswerModal});
  }

  showOrHideQuestionModal (id) {
    // this.props.handleInteraction(id, 'QuestionList');
    this.setState({showQuestionModal: !this.state.showQuestionModal});
  }

  handleReportClick(id, name) {
    document.getElementById(id).disabled = true;
    this.props.handleInteraction(id, 'QuestionList');

    axios.put('http://localhost:3000/question/reportQuestion', {
      params: {
        question_id: name
      }
    })
      .then((res) => {
        console.log('reported question');
      })
      .catch((err) => {
        console.log('client side error report question', err.response.data);
      })
  }

  handleShowMoreClick() {
    this.setState({ showMore: !this.state.showMore })
    this.props.handleInteraction('moreQuestions', 'QuestionList');
  }

  handleUpvoteClick(id) {
    this.props.handleInteraction(id, 'QuestionList');

    console.log(id);
    axios.put('http://localhost:3000/question/upvoteQuestionHelpful', {
      params: {
        question_id: id
      }
    })
      .then((res) => {
        console.log('upvoted question');
      })
      .catch((err) => {
        console.log('client side error upvoting question helpfulness', err.response.data);
      })
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
    if (this.state.showMore === false) {
      questionData = questionData.slice(0, 2);
    }

    //edge case for no question data
    if (questionData.length === 0) {
      return (
        <div className="no-questions">
          <h4>Sorry, there are no questions listed for this product</h4>
        </div>
      )
    }


    return (
      <div className="questionList">
        <ul>
          {questionData.map((item) => {
            return (
              <li key={item.question_id}>
                <AnswerModal show={this.state.showAnswerModal} close={this.showOrHideAnswerModal}
                question_id={item.question_id}/>
                <QuestionModal show={this.state.showQuestionModal} close={this.showOrHideQuestionModal}
                product_id={this.props.product_id}/>
                <h4 id='question-header'>Q: </h4>
                <small className='question-helpfulness'> Helpful?
                  <button className="upvote-helpfulness" id={item.question_id}
                    onClick={(e) => this.handleUpvoteClick(e.target.id)}>Yes</button>
                  ({item.question_helpfulness})
                  {/* <button className="report-question" id={item.question_id + "report"} name={item.question_id}
                  onClick={(e) => this.handleReportClick(e.target.id, e.target.name)}>Report</button>*/}
                  <button id="addAnAnswer" onClick={(e) => this.showOrHideAnswerModal(e.target.id)}>Add Answer</button>
                </small>
                <div className='question'>{item.question_body}

                  <div className='answerList'>
                    <Answers question_id={item.question_id} handleInteraction={this.props.handleInteraction} />
                  </div>
                </div>

              </li>
            )
          })}
        </ul>
        <button id="moreQuestions" onClick={this.handleShowMoreClick}>MORE ANSWERED QUESTIONS</button>
        <button id="addAQuestion" onClick={(e) => this.showOrHideQuestionModal(e.target.id)}>ADD A QUESTION +</button>
      </div>
    )
  }
}

export default QuestionList;