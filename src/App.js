import React, { Component } from 'react';
import * as _ from 'lodash'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
        shoes: [ { name: "loafer", key: "1" }, { name: "brogue", key: "2" }, { name: "boat", key: "3" } ]
    }
  }

  render() {
    return (
        <div className="App">
            {
                this.state.shoes.map(shoe => <h1 key={shoe.key}>{_.capitalize(shoe.name)}</h1>)
            }
        </div>
    );
  }
}

export default App;
