import React, { Component } from 'react';
import {BrowserRouter, Route} from "react-router-dom"

import HouseCompetition from "./components/HouseCompetition";
import NavBar from './components/NavBar/NavBar'


class App extends Component {

  constructor() {
    super();
    this.state = {
      label: "Hello Pokemon"
    }
    console.log("Hello");
  }

  render() {
    return(
      <div id="App">
        <NavBar />
        <main style={{marginTop:'64px'}}>
          <BrowserRouter>
            <Route path="/" component={HouseCompetition} />
          </BrowserRouter>
        </main>
      </div>
    );
  }
}

export default App;
