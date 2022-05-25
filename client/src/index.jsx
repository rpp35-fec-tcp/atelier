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
    //axios post request to a server route with the following body
      //body: {
      //   element: element, widget: widget, time: create a new timestamp
      // }

      let date = new Date();
      let time = date.getTime(); //return UTC time stamp;

      axios.post('http://localhost:3000/interactions', {
        //insert the body object here
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
