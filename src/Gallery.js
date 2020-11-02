import React, { Component } from 'react';
import Thumb from './Thumb.js';


class Gallery extends Component {
  constructor(props){
    super(props);
  }


  render() {
    return (
      <div className="container align-self-centre">
        <div className="container-fluid">
        {this.props.api.map(({img_src, id,  earth_date}) =>
          <Thumb key={id} src={img_src} date={earth_date}/>
        )}
        </div>
      </div>
    )
}}



export default Gallery;
