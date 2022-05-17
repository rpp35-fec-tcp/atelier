import React from 'react';
import ReactDOM from 'react-dom';

class QuestionList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let questionData = this.props.questions;
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