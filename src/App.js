import React, { Component } from 'react'
import './App.css'
import Person from './Person/Person'
import styled from 'styled-components'

const StyledButton = styled.button`
  background-color: ${props => (props.alt ? 'red' : 'green')};
  color: white;
  font: inherit;
  border: 2px solid blue;
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${props => (props.alt ? 'salmon' : 'lightgreen')};
    color: black;
  }
`
class App extends Component {
  state = {
    persons: [
      { id: 1, name: 'Huey', age: 30 },
      { id: 2, name: 'Duey', age: 40 },
      { id: 3, name: 'Luey', age: 50 }
    ],
    showPersons: false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    })
    const person = { ...this.state.persons[personIndex] }

    person.name = event.target.value

    const persons = [...this.state.persons]
    persons[personIndex] = person
    this.setState({ persons: persons })
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({ showPersons: !doesShow })
  }

  deletePersonHandler = personIndex => {
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1)
    this.setState({ persons: persons })
  }

  render() {
    const style = {}

    let persons = null

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={event => this.nameChangedHandler(event, person.id)}
              />
            )
          })}
        </div>
      )
      style.backgroundColor = 'red'
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }

    const classes = ['']
    if (this.state.persons.length <= 2) {
      classes.push('red')
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold')
    }

    return (
      <div className="App">
        <p className={classes.join(' ')}>Some style pointers.</p>
        <StyledButton
          alt={this.state.showPersons}
          onClick={this.togglePersonHandler}
        >
          Switch Name!
        </StyledButton>
        {persons}
      </div>
    )
  }
}

export default App
