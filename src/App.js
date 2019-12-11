import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

const app = props => {
  const [ personsState, setPersonsState ] = useState({
    persons: [
      {name: 'Max', age: 28},
      {name: 'Manu', age: 29},
      {name: 'Steph', age: 26}
    ],
    otherState: 'some other value'
  });

  const [otherState, setOtherState] = useState('some other value')

  console.log(personsState, otherState);

  const switchNameHandler = () =>{
    // Dont do this this.state.persons[0].name = "Maximilian";
    setPersonsState({
      persons: [
        {name: 'Maximilian', age: 28},
        {name: 'Manu', age: 29},
        {name: 'Steph', age: 27}
      ]
    });
  };

  return (
    <div className="App">
      <h1> Hi, Im a React App </h1>
      <p> this works </p>
      <button onClick={switchNameHandler}> Switch Name</button>
      <Person name ={personsState.persons[0].name} age={personsState.persons[0].age}>My Hobbies: Racing</Person>
      <Person name ={personsState.persons[1].name} age={personsState.persons[1].age}/>
      <Person name ={personsState.persons[2].name} age={personsState.persons[2].age}/>
    </div>
  );
  // return React.createElement('div', {className: 'App'},React.createElement('h1',null, 'Does this work?'))
}

export default app;
