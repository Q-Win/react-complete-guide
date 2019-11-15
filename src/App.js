import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Hi, Im a React App </h1>
        <p> this works </p>
      </div>
    );
    // return React.createElement('div', {className: 'App'},React.createElement('h1',null, 'Does this work?'))
  }
}

export default App;
