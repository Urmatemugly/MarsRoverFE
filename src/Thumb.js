import React, { Component } from 'react';


class Thumb extends Component {
  constructor(props){
    super(props);

  }

  render() {
    return (
      <figure class="figure">
      <img src={this.props.src} class="figure-img img-fluid img-thumbnail rounded"/>
      <figcaption class="figure-caption">{this.props.date}</figcaption>
      </figure>
    )
  }

}

export default Thumb;
