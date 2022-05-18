import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
// import widgets from './components/relatedItems&comparison/relatedItems&comparison.jsx';
import {Overview, Related, Questions, Rating} from './widgets.jsx';


//add App component
class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      currentProductId: 71702
    }
  }
  render() {
    return (
      <div>
        <Overview currentProductId={this.state.currentProductId}/>
        <Related currentProductId={this.state.currentProductId}/>
        <Questions currentProductId={this.state.currentProductId}/>
        <Rating currentProductId={this.state.currentProductId}/>
      </div>
    )
  }
}


ReactDOM.createRoot(document.getElementById('app')).render(<App />);


