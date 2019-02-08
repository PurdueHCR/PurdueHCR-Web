import React, { Component } from 'react';
import logo from './logo.svg';
import HelperFunctions from './APIHelper'
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      label: "Hello Pokemon"
    }
    console.log("Hello");
  }

  componentDidMount() {
    HelperFunctions.getHouses.then(data => {
      console.log(data);
      let letter = data.houses[0].HouseName;
      console.log("state found",letter)
      this.setState({label:"Hello "+letter});
    })


  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
<<<<<<< Updated upstream
            Hello Brian!
=======
            {this.state.label}
>>>>>>> Stashed changes
          </a>
        </header>
      </div>
    );
  }
}

export default App;
