import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './modal.css';


class QuestionModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {body: '', name: '', email: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();

    if (this.state.name === '') {
      alert('Please fill in Username');
      return;
    } else if (this.state.body === '') {
      alert('Please fill in answer body');
      return;
    } else if (this.state.email === '') {
      alert('Please fill in email');
      return;
    } else {
      axios.post('http://localhost:3000/question/addQuestion', {
        data: {
          product_id: this.props.product_id,
          name: this.state.name,
          body: this.state.body,
          email: this.state.email
        }
      })
        .then((res) => {
          this.setState({
            name: '',
            body: '',
            email: ''
          });
          alert('Answer successfully added');
          this.props.close(e.target.id);
        })
        .catch((err) => {
          console.error(err.response.data);
        })
    }
  }

  render () {
    let display = this.props.show ? "modal display-block" : "modal display-none";

    return (
      <div className={display}>
        <form className="modal-main">
          <label>
            Required:
            <br></br>
            <input type="text" name="name" value={this.state.name} placeholder="Username"
              onChange={(e) => this.handleChange(e)} />
            <br></br>
            <textarea type="text" name="body" value={this.state.body} placeholder="Please add your question here"
              onChange={(e) => this.handleChange(e)} />
            <br></br>
            <input type="text" name="email" value={this.state.email} placeholder="Email"
              onChange={(e) => this.handleChange(e)} />
          </label>

          <button id="closeQuestionModal" type="submit"
            onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    )
  }
}

export default QuestionModal;