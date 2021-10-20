import React, { Component } from 'react';
import CardList from '../component/CardList';
import SearchBox from '../component/SearchBox.js';
import { robots } from '../Robots'
import './App.css';
import Add from '../component/Add.js'
import Scroll from '../component/Scroll.js'
import ErrorBoundraies from '../component/ErrorBoundaries.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: '',
    }
  }
  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(user => this.setState({ robots: robots }));

  }
  render() {
    const filterring = this.state.robots.filter(robots => {
      return robots.name.toLocaleLowerCase().includes(this.state.searchField.toLocaleLowerCase());
    })
    return (
      <div className='tc'>
        <h1>R o b o F r i n d e s</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <ErrorBoundraies>
            <CardList robots={filterring} />
          </ErrorBoundraies>
        </Scroll>
        <Add />
      </div>
    );
  }
}

export default App;
