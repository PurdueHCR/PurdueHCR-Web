import logo from '../logo.svg';
import React, { Component } from 'react';
import HelperFunctions from '../APIHelper'
import CircularProgressbar from 'react-circular-progressbar';
import './Circle-Progress.css'


class HouseCompetition extends Component{

  constructor() {
    super();
    this.state = {
      simpleSystem: {
        copper: 2,
        palladium: 66,
        platinum: 66,
        silver: 66,
        titanium: 66
      },
      houseSystem : {}

    }
    console.log("Hello");
  }

  componentDidMount() {
    HelperFunctions.getHouses.then(data => {
      console.log(data);
      this.setState({houseSystem : data})
    })


  }
render(){
  if(this.state.houseSystem.houses == null){
      return (
        <div id="HouseCompetition">
          LOADING
        </div>
      );
    }
    else{
      return (
        <div id="HouseCompetition">
          <div><CircularProgressbar percentage={parseInt(this.state.simpleSystem.copper)} text={this.state.houseSystem.houses[0].HouseName} /></div>
          <div><CircularProgressbar percentage={parseInt(this.state.simpleSystem.palladium)} text={this.state.houseSystem.houses[1].HouseName} /></div>
          <div><CircularProgressbar percentage={parseInt(this.state.simpleSystem.platinum)} text={this.state.houseSystem.houses[2].HouseName} /></div>
          <div><CircularProgressbar percentage={parseInt(this.state.simpleSystem.silver)} text={this.state.houseSystem.houses[3].HouseName} /></div>
          <div><CircularProgressbar percentage={parseInt(this.state.simpleSystem.titanium)} text={this.state.houseSystem.houses[4].HouseName} /></div>
        </div>
      );
    }

  }
}
export default HouseCompetition
