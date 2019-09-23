import React, { Component } from 'react';
import './App.css';

import  CardList   from './components/CardList/CardList';
import { SearchBox } from './components/SearchBox/SearchBox';

class App extends Component {
  constructor() {
    super();
    this.state = {
     monsters: [],
     searchedMonsters: ""
  }
}

componentDidMount = () => {
  fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(users => this.setState({monsters: users}));
}

searchMonsters = (e) => {
  this.setState({searchedMonsters: e.target.value}, () => console.log(this.state.searchedMonsters));
 
}

  render() {
    const { monsters, searchedMonsters } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchedMonsters.toLocaleLowerCase()))
    return (
      <div className="App">
        <SearchBox 
          placeholder="Search Monsters"
          handleChange={this.searchMonsters}
          />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
