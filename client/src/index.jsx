import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
// import widgets from './components/relatedItems&comparison/relatedItems&comparison.jsx';
import { Overview, Reviews, Questions, Related } from './widgets.jsx';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      currentProductId: 71702
    }
  }

  changeCurrentProductId(id) {
    console.log(id);
    this.setState({
      currentProductId: id
    })
    //console.log(this.state.currentProductId);
  }

  render() {
    return (
      <div>
        <Overview currentProductId={this.state.currentProductId}/>
        <Reviews currentProductId={this.state.currentProductId}/>
        <Questions currentProductId={this.state.currentProductId}/>
        <Related currentProductId={this.state.currentProductId} changeCurrentProductId={this.changeCurrentProductId.bind(this)}/>
      </div>
    )
  }
}

ReactDOM.createRoot(document.getElementById('app')).render(<App />);
