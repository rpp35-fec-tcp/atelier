import React from 'react';
import ReactDOM from 'react-dom';

class QuestionList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {questions: props.questions};
  }
  render() {
    return (
      <div className="questionList">
        <h5 id='question-header'>Product Questions</h5>
        <ul>
        {this.state.questions.map((item) => {
          return (
              <li key={this.state.questions.indexOf(item)}>
                <span className='question'>{item.question}</span>
                <span className='answer'>{item.answers[0].answer}</span>
                <span className='answer'>{item.answers[1].answer}</span>
              </li>
          )
        })}
        </ul>
      </div>
    )
  }
}

export default QuestionList;