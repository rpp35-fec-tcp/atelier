import React from 'react';
import ReactDOM from 'react-dom/client';
//import 'bootstrap/dist/css/bootstrap.min.css';
// import widgets from './components/relatedItems&comparison/relatedItems&comparison.jsx';
import { Overview, Related, Questions } from './widgets.jsx';
import Reviews from './components/reviews/Reviews.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProductId: 71697,
    };
    this.changeCurrentProductId = this.changeCurrentProductId.bind(this);
  }

  changeCurrentProductId(id) {
    console.log(id);
    this.setState({
      currentProductId: id,
    });
    //console.log(this.state.currentProductId);
  }

  render() {
    return (
      <div>
        <Overview currentProductId={this.state.currentProductId} />
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

ReactDOM.createRoot(document.getElementById('app')).render(<App />);
