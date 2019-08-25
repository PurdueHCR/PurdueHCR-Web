import React, { Component } from 'react';
import logo from '../logo.svg';
import HelperFunctions from '../APIHelper'

class HouseCompetition extends Component{

  constructor() {
    super();
    this.state = {
      label: "Hello World"
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
render(){
  return (
    <div>
          {this.state.label}
    </div>
  );
}
}
export default HouseCompetition
