import React, { Component } from 'react';

import Topic from './modules/Topic';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>A Simple Reddit</h1>
        <Topic />
      </div>
    );
  }
}

export default App;
