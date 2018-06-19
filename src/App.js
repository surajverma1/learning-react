import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Route exact path="/" component={Header}/>
        <Route exact path="/footer" component={Footer}  />
        <Route exact path="/home" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/sign-up" component={SignUp} />
        <Route exact path="/sign-in" component={SignIn} />
      </div>
      </Router>
    );
  }
}

export default App;
