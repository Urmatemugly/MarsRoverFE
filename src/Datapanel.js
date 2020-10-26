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
      dates:[]
    };
    /** Bind (this) **/
    this.getRoverData = this.getRoverData.bind(this);
  }

  /** Update state when button is Clicked **/
  async getRoverData(name){
    this.setState({ chosen: true, name: (name)});
    const { data } = await axios.get(`/rovers/${name}`)
    console.log(data.response.latest_photos);
    const land = data.response.latest_photos[0].rover.landing_date
    const launch = data.response.latest_photos[0].rover.launch_date
    const status = data.response.latest_photos[0].rover.status
    const image = data.response.latest_photos[0].img_src
    this.setState({ launch: launch, land: land, status: status, imgs: image});
  }


  /** After component reaches render method, get data from API **/
  componentDidMount() {

  }

  /** Render clickable buttons, displaying currently clicked **/
  render(){
    return (
      <div className="App">
      <h1>Mars Rover Dashboard</h1>
      {this.props.rovers.map(rover =>
        <Button key={rover} roverData={this.getRoverData} name={rover}/>
      )}
      {this.state.chosen ?
        <div>
        <h2>{this.state.name}</h2>
        <p>Launch Date: {this.state.launch}</p>
        <p>Landing Date: {this.state.land} </p>
        <p>Status: {this.state.status}</p>
        <img src={this.state.imgs}/>
        </div>
        :
        <h2>Click a button to get started!</h2>
      }      
      </div>
    )
  }
}

export default Datapanel;
