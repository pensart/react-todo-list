import React, { Component } from 'react';
import Todos from './components/Todos';
import './App.css';

class App extends Component {

  state = {
    todos: [
      {
        id: 1,
        title: 'Finish this tutorial',
        completed: false
      },
      {
        id: 2,
        title: 'Prepare meal',
        completed: false
      },
      {
        id: 3,
        title: 'Call your best friend',
        completed: true
      }
    ]
  }

  render() {
    console.log(this.state.todos);
    return (
      <div className="App">
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
