import React, { Component } from 'react';
import routes from './routes';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <nav className="nav">
          <Header />
        </nav>
        <div className="App-container">
          {routes}
        </div>
      </div>
    );
  }
}

export default App;
