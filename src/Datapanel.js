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
  getRoverName(name){
    this.setState({ chosen: true, name: (name)});
    const state = this.state
    const options = {
      method: 'POST',
      header: {
        'Content-Type': 'json'
      },
      body: JSON.stringify(state.name)
    }
    fetch(`/api/${state.name}`, options);
  }


  /** After component reaches render method, get data from API **/
  componentDidMount() {
      axios.get('/apod').then(response => {
        console.log(response.data);
      })
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
        <Button getRover={this.getRoverName} name={rover}/>
      )}
      </div>
    )
  }
}

export default Datapanel;
