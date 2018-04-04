import React, { Component } from 'react';
import routes from './routes';
import Header from './components/Header/Header';

class App extends Component {
  render() {
    return (
      <div>
        <nav className="nav">
          <Header />
        </nav>
        {routes}
      </div>
    );
  }
}

export default App;
