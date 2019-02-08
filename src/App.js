import React, { Component } from 'react';
import {BrowserRouter, Route} from "react-router-dom"

import HouseCompetition from "./components/HouseCompetition";
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
    return(
    <BrowserRouter>
      <Route path="/" component={HouseCompetition} />
    </BrowserRouter>
  );
  }
}

export default App;
