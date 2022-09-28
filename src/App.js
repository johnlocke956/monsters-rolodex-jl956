import './App.css';
// import { Component } from 'react';
import { useState, useEffect } from 'react'

import CardList from './components/card-list/card-list-component'
import SearchField from './components/search-box/search-box-component'

const API_URL = `https://jsonplaceholder.typicode.com/users`

const App = () => {
  // useState gives us the ability to encapsulate local state in a functional component.
  // it gives us an array of two values: [value we want to store, function setValue]
  const [searchField, setSearchField] = useState('') // ('') is the initial value
  const [monsters, setMonsters] = useState([])
  const [filteredMonsters, setFilteredMonsters] = useState(monsters)

  console.log('render')

  // useEffect takes two arguments
  // (1) callback fn -> the code, or EFFECT, that we want to happen inside our functional component
  // (2) array of dependencies ->  most likely state values; whenever any of these values inside of this dependency array change is when the callback fn will run
  useEffect(() => {
    fetch(API_URL)
      .then(resp => resp.json())
      .then(users => { setMonsters(users) })
  }, [])

  useEffect(() => {
    const newFilteredMonsters = monsters.filter(el => el.name.toLocaleLowerCase().includes(searchField))
    setFilteredMonsters(newFilteredMonsters)
    console.log('effect 2 is firing')
  }, [monsters, searchField]) //useEffect will be fired only when these dependencies don't change

  const onSearchChange = e => {
    // setState is UNIQUE TO CLASS COMPONENTS!
    // this.setState(() => { return { searchField } })

    const searchFieldString = e.target.value.toLocaleLowerCase()
    setSearchField(searchFieldString)
  }

  return (
    <div className="App">
      <h1 className='app-title'>Monsters Rolodex</h1>
      <SearchField
        className='search-box'
        placeholder='search monsters'
        onChangeHandler={onSearchChange}
      />
      <CardList monsters={filteredMonsters} />
    </div>
  )
}

/*
class App extends Component {
  constructor() {
    super()
    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  // mounting is the first time a component gets placed, or rendered, into the DOM
  componentDidMount() {
    fetch(API_URL)
      .then(resp => {
        if (!resp.ok) throw new Error(`Something went wrong while fetching data [${resp.status}]`)
        return resp.json()
      })
      .then(users => {
        this.setState(() => { return { monsters: users } }, () => { })
      })
  }

  onSearchChange = e => {
    const searchField = e.target.value.toLocaleLowerCase()
    this.setState(() => { return { searchField } })
  }

  render() {
    const { monsters, searchField } = this.state
    const { onSearchChange } = this
    const filteredMonsters = monsters.filter(el => el.name.toLocaleLowerCase().includes(searchField))

    return (
      <div className="App">
        <h1 className='app-title'>Monsters Rolodex</h1>
        <SearchField
          className='search-box'
          placeholder='search monsters'
          onChangeHandler={onSearchChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}
*/
export default App;
