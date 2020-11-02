import React, { Component } from 'react';


class Button extends Component {
  constructor(props){
    super(props);
  this.handleClick = this.handleClick.bind(this);

  }

  handleClick(evt){
    this.props.roverData(this.props.name)

  }

  /** Map over rovernames (props) & create button for each with eventListener**/
  render() {
    return (
      <button className="btn btn-primary btn-lg btn-block active" onClick={this.handleClick}>{this.props.name}</button>
    )
  }

}

export default Button;
