import React, { Component } from 'react';
import Button from './Button.js';
import Img from './Img.js';
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
      date:[]
    };
    /** Bind (this) **/
    this.getRoverData = this.getRoverData.bind(this);
  }

  /** Update state when button is Clicked **/
  async getRoverData(name){
    this.setState({ chosen: true, name: (name)});
    const { data } = await axios.get(`/rovers/${name}`)

    const photos = data.response.latest_photos.map(photo => photo.img_src);
    const land = data.response.latest_photos[0].rover.landing_date
    const launch = data.response.latest_photos[0].rover.launch_date
    const status = data.response.latest_photos[0].rover.status
    const date = data.response.latest_photos[0].earth_date


    this.setState({ launch: launch, land: land, status: status, imgs: photos, date: date});
  }


  /** After component reaches render method, get data from API **/
  componentDidMount() {

  }

  /** Render clickable buttons, displaying currently clicked **/
  render(){
    /** If images are available, render them (study source: https://www.debuggr.io/react-map-of-undefined/#wrapping-up)**/
    let imgUrls;
    if (this.state.imgs) {
      imgUrls = this.state.imgs.map(url => {
        return <img src={url}/>
      })

    }
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
          <div>
            {imgUrls}
          </div>
        </div>
        :
        <h2>Click a button to get started!</h2>
      }
      </div>
    )
  }
}

export default Datapanel;
