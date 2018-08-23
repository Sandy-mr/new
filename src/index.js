import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './css/home.css';
import './css/product.css';
import App from './App';

import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';

class AppRouter extends React.Component {
  render(){
    return (
      <BrowserRouter>
      <App />
      </BrowserRouter>
    )
  }
}

ReactDOM.render(<AppRouter />, document.getElementById('root'));
registerServiceWorker();
