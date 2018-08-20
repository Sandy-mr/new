import React, { Component } from 'react';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';

import Nav from './component/nav.js';
import Footer from './component/footer.js';
import cbody from './component/Cbody.js';

import About from './component/about.js';
import Terms from './component/terms.js';
import header from './component/header.js';
import home from './component/home.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/terms" component={Terms} />
          <Route exact path="/about" component={About} />
          <Route exact path="/" component={home} />
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default App;
