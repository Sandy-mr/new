import React, { Component } from 'react';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';


import Nav from './component/nav.js';
import Footer from './component/footer.js';
import Cbody from './component/Cbody.js';

import About from './component/about.js';
import Terms from './component/terms.js';
import Header from './component/header.js';
import home from './component/home.js';
import Category from './component/category.js';

class App extends Component {

  constructor() {
    super();

    this.state = {
      backgroundHome: home
    };
  }

  render() {
    return (
      <div className="App">
      <Nav />
        <Switch>
          <Route exact path="/terms" component={Terms} />
          <Route exact path="/about" component={About} />
          <Route exact path="/" component={home} />
          <Route path='/category/:cat' component={Category} />
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default App;
