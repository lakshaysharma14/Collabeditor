import React, { Component } from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Doc from './Doc';
import './App.css';
import Home from './Home';


class App extends Component {
  render() {
    return(
  	<Router>
      
      <div className="App">
      
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/doc" component={Doc}></Route>

      </div>

    </Router>
      
      
    );
  }
}

export default App;
