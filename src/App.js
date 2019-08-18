import React, { Component } from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import Todos from './components/Todos';
import Header from './components/Layout/Header';
import AddTodo from './components/AddTodo';
import About from './components/Pages/About';
import uuid from 'uuid';
import './App.css';

class App extends Component {

  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'Finish this tutorial',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Prepare meal',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Call your best friend',
        completed: true
      }
    ]
  }

  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      console.log(id);
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    }) })
  }

  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false
    }
    this.setState({todos: [...this.state.todos, newTodo]})
  }

  delTodo = (id) => {
    this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]});
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
              </React.Fragment>
            )} />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
