import React, { Component } from 'react';
import Button from './Button.js';

/** Build a stateful component to supply data to its children **/
class Datapanel extends Component {
  static defaultProps = {
    rovers: ['Curiosity', 'Opportunity', 'Spirit'],
  };
  constructor(props){
    super(props);
    /** Rover names as properties (iterate for buttons) **/

    /** Define elements of state  **/
    this.state = {
      chosen: false,
      selected: {
        name: '',
        launch:'',
        land:'',
        status:'',
        imgs:[],
        dates:[],
      }
    };
    /** Bind (this) **/
    this.getRoverName = this.getRoverName.bind(this);
  }

  updateState(state) {
    this.setState(st => ({
      chosen: true
    }));
  }
// addCount(){
// console.log('clicked!');
// }
getRoverName(name){
  console.log('clicked!');
  console.log(name);
}
  /** Function to handle click**/
  // handleClick(e) {
  //   this.setState(state => ({
  //     ...state,
  //     chosen: true,
  //     selected: {
  //       name: event.currentTarget
  //       }
  //     }
  //   ))
  // }


  /** Render clickable buttons, displaying currently clicked**/
  render(){
    return (
      <div className="App">
      <h1>Mars Rover Dashboard</h1>
      <h2>{this.state.selected.name}</h2>
      {this.props.rovers.map(rover =>
        <Button getData={this.getRoverName} name={rover}/>
       )}
      </div>
    )
  }
}

export default Datapanel;
