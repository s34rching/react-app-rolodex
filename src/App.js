import * as _ from 'lodash'
import React, { Component } from 'react';
import './App.css';
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component"

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      searchQuery: ''
    }
  }

  handleChange = e => {
    this.setState({searchQuery: e.target.value})
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
          <h1> Users Rolodex </h1>
          <SearchBox
              placeholder='Search users'
              handleChange={this.handleChange}
          />
          <CardList users={filteredUsers} />
        </div>
    );
  }
}

export default App;
