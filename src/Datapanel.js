import React, { Component } from 'react';
import Button from './Button.js';
import Gallery from './Gallery.js';
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
      dataRdy: false,
      name: '',
      launch:'',
      land:'',
      status:'',
      api: [],
    };

    /** Bind (this) **/
    this.getRoverData = this.getRoverData.bind(this);
  }

  /** Update state when button is Clicked **/
  async getRoverData(name){
    this.setState({ chosen: true, name: (name)});
    const { data } = await axios.get(`/rovers/${name}`)

    /** Define response variables **/
    const api = data.response.latest_photos
    const land = data.response.latest_photos[0].rover.landing_date
    const launch = data.response.latest_photos[0].rover.launch_date
    const status = data.response.latest_photos[0].rover.status


    /** SetState with response data **/
    this.setState({ dataRdy: true, launch: launch, land: land, status: status, api:api});
  }

  /** Render clickable buttons, displaying currently clicked **/
  render(){

    /** If images are available, render them (study source: https://www.debuggr.io/react-map-of-undefined/#wrapping-up)**/

    return (
      <div class="container">
      <h1 class="text-center header">Mars Rover Dashboard</h1>
      {this.props.rovers.map(rover =>
        <Button key={rover} roverData={this.getRoverData} name={rover}/>
      )}
        {this.state.dataRdy ?
          <div className="container">
            <div class="container">
            <h2 class="text-center">{this.state.name}</h2>
            <div class="container-fluid">
            <p class="text-center">Launched Date: {this.state.launch}</p>
            <p class="text-center">Landing Date: {this.state.land} </p>
            </div>
            <div class="container">
              <p class="text-center">Status: {this.state.status}</p>
            </div>
            </div>
          </div>
          :
          <h2 className="text-muted text-center">Click a button to get started!</h2>
        }

        {this.state.dataRdy ?
          <Gallery api={this.state.api}/>
          :
          <p></p>
        }
        </div>
      )
}
}

export default Datapanel;
