import React, { Component } from 'react';
import './App.css';
import { CardList } from "./components/card-list/card-list.component";
import * as _ from 'lodash'

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      searchQuery: ''
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(users => this.setState({ users: users }))
  }

  render() {
    const { users, searchQuery } = this.state
    const filteredUsers = _.filter(users, user => user.name.includes(searchQuery.toLowerCase()))

    return (
        <div className="App">
          <input
              type='search'
              placeholder='Search users'
              onChange={(e) => {
                this.setState({searchQuery: e.target.value})
              }}/>
          <CardList users={filteredUsers} />
        </div>
    );
  }
}

export default App;
