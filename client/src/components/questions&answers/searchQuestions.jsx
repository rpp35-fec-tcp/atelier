/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable comma-dangle */
import React from 'react';
import './searchQuestion.css';

class SearchQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: ''
    };
  }

  handleChange(e) {
    this.setState({ searchValue: e.target.value }, () => {
      this.props.questionFilter(this.state.searchValue);
    });
  }

  render() {
    return (
      <div className="questionsSearchBar">
        <input
          id="questionsSearchBar-text"
          placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS"
          value={this.state.searchValue}
          onChange={(e) => this.handleChange(e)}
        />
      </div>
    // eslint-disable-next-line semi
    )
  }
}

export default SearchQuestion;
