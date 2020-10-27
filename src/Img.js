import React, { Component } from 'react';


class Img extends Component {
  constructor(props){
    super(props);

  }

  render() {
    return (
      <img src={this.props.src} />
    )
  }

}

export default Img;
