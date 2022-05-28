import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import { Overview, Related, Questions } from './widgets.jsx';
import Reviews from './components/reviews/Reviews.jsx';
// import {getId} from './components/relatedItems&comparison/getAndPost.jsx';

console.log('window.location: ', window.location.href);
class App extends React.Component {

  constructor(props) {
    super(props);
    console.log(window.location.pathname)
    this.state = {
      currentProductId: 71697
    };
    this.changeCurrentProductId = this.changeCurrentProductId.bind(this);
    //console.log('window.location.pathname: ', window.location.pathname);
  }
  // componentDidMount() {
  //   getId((id) => {
  //     this.setState({
  //       currentProductId:id
  //     })
  //     console.log(id)
  //   })
  // }
  changeCurrentProductId(id) {
    this.setState({
      currentProductId: id,
    });
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
// function App() {
//     var currentProductId = 71697;

//     return (
//       <div>
//       <Link to="/id">ID</Link>
//         <Overview currentProductId={currentProductId} />
//         {/* <Related
//           currentProductId={this.state.currentProductId}
//         /> */}
//         <Questions currentProductId={currentProductId} />
//         <Reviews currentProductId={currentProductId} />
//       </div>
//     );
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
// root.render(
//   <BrowserRouter>
//     <Routes>
//       <Route path='/' element={<App />} />
//         <Route path='id' element={<App />} />
//     </Routes>
//   </BrowserRouter>
// );
