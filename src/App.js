import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Hi, Im a React App </h1>
        <p> this works </p>
        <Person name ="Max" age="28">My Hobbies: Racing</Person>
        <Person name ="Manu" age="29"/>
      </div>
    );
    // return React.createElement('div', {className: 'App'},React.createElement('h1',null, 'Does this work?'))
  }
}

export default App;
