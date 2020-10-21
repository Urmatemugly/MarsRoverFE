import React, { Component } from 'react';
import Button from './Button.js';


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
  }


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
        <Button getData={this.getRoverName} name={rover}/>
      )}
      </div>
    )
  }
}

export default Datapanel;
