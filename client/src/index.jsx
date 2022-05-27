import React from 'react';
import ReactDOM from 'react-dom/client';
//import 'bootstrap/dist/css/bootstrap.min.css';
// import widgets from './components/relatedItems&comparison/relatedItems&comparison.jsx';
import { Overview, Related, Questions } from './widgets.jsx';
import Reviews from './components/reviews/Reviews.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProductId: 71697
    };
    this.changeCurrentProductId = this.changeCurrentProductId.bind(this);
  }

  handleInteraction (element, widget) {
      let date = new Date();
      let time = date.getTime(); //returns UTC time stamp;

      axios.post('http://localhost:3000/interactions', {
        data: {
          element: element,
          widget: widget,
          time: time
        }
      })
        .then ((res) => {
          console.log(res.status);
        })
        .catch((err) => {
          console.log(err.response.data);
        })
  }

  changeCurrentProductId(id) {
    this.setState({
      currentProductId: id,
    });
    //console.log(this.state.currentProductId);
  }

  render() {
    return (
      <div>
        <Overview currentProductId={this.state.currentProductId}  changeCurrentProductId={this.changeCurrentProductId.bind(this)}/>
        <Related
          currentProductId={this.state.currentProductId}
          changeCurrentProductId={this.changeCurrentProductId}
        />
        <Questions currentProductId={this.state.currentProductId} />
        <Reviews currentProductId={this.state.currentProductId} />
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
