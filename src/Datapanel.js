import React, { Component } from 'react';
import Button from './Button.js';
import axios from 'axios';

class Datapanel extends Component {

  /** Rover names as properties (iterate for buttons) **/
  static defaultProps = {
    rovers: ['Curiosity', 'Opportunity', 'Spirit'],
  };

  constructor(props){
    super(props);

    /** Define elements of state  **/
    this.state = {
      chosen: false,
      name: '',
      launch:'',
      land:'',
      status:'',
      imgs:[],
      dates:[],
    };
    /** Bind (this) **/
    this.getRoverName = this.getRoverName.bind(this);
  }

  /** Update state when button is Clicked**/
  async getRoverName(name){
    this.setState({ chosen: true, name: (name)});
    const { data } = await axios.get(`/rovers/${name}`)
    const land = data.response.photo_manifest.landing_date
    const launch = data.response.photo_manifest.launch_date
    const status = data.response.photo_manifest.status
    this.setState({ launch: launch, land: land, status: status});
  }


  /** After component reaches render method, get data from API **/
  componentDidMount() {

  }
  //    axios.get("/apod").then(response => {
  //   console.log(response.data)
  // }}

  /** Render clickable buttons, displaying currently clicked**/
  render(){
    return (
      <div className="App">
      <h1>Mars Rover Dashboard</h1>
      {this.state.chosen ?
        <div>
        <h2>{this.state.name}</h2>
        <p>Launch Date: {this.state.launch}</p>
        <p>Landing Date: {this.state.land} </p>
        <p>Status: {this.state.status}</p>
        </div>
        :
        <h2>Click a button to get started!</h2>
      }
      {this.props.rovers.map(rover =>
        <Button key={rover} getRover={this.getRoverName} name={rover}/>
      )}
      </div>
    )
  }
}

export default Datapanel;
