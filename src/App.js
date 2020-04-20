import React, { Component } from 'react'
import './App.css'
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: 'Charles', age: 39 },
      { name: 'Gianna', age: 28 }
    ]
  }

  swithNameHandler = () => {
    this.setState({
      persons: [
        { name: 'Chaz', age: 39 },
        { name: 'Gianna', age: 29 }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.swithNameHandler}>Switch Name!</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        >
          I am a web developer.
        </Person>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        >
          I am a project manager
        </Person>
      </div>
    )
  }
}

export default App
