import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
      super();
      this.state = {
          baseGreeting: "Good morning!"
      }
  }

  render() {
      return (
          <div className="App">
              <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                  <p>{ this.state.baseGreeting }</p>
                  <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                      Learn React
                  </a>
                  <button onClick={ () => this.setState({ baseGreeting: "Good night!" })}>
                      Change greeting text
                  </button>
              </header>
          </div>
      );
  }
}

export default App;
