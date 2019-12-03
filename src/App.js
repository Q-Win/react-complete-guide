import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

const app = props => {

  return (
    <div className="App">
      <h1> Hi, Im a React App </h1>
      <p> this works </p>
      <button onClick={this.switchNameHandler}> Switch Name</button>
      <Person name ={this.state.persons[0].name} age={this.state.persons[0].age}>My Hobbies: Racing</Person>
      <Person name ={this.state.persons[1].name} age={this.state.persons[1].age}/>
      <Person name ={this.state.persons[2].name} age={this.state.persons[2].age}/>
    </div>
  );
  // return React.createElement('div', {className: 'App'},React.createElement('h1',null, 'Does this work?'))
}

export default app;

state = {
  persons: [
    {name: 'Max', age: 28},
    {name: 'Manu', age: 29},
    {name: 'Steph', age: 26}
  ]
}

switchNameHandler = () =>{
  // Dont do this this.state.persons[0].name = "Maximilian";
  this.setState({persons: [
    {name: 'Maximilian', age: 28},
    {name: 'Manu', age: 29},
    {name: 'Steph', age: 27}
  ]})
}
