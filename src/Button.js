import React, { Component } from 'react';
// import Selector from ('./Selector')

class Button extends Component {
  constructor(props){
    super(props);
    this.state = {
      clicked: false,
      count: 0
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    this.setState(st => {
      return {
        count: st.count+1
      }
    })
  }

  // doThis(){
  //   const count = 0;
  //   const btn = document.querySelector('btn');
  //   btn.addEventlistener('onClick', function(e){
  //     count++
  //   })
  // }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Curiosity</button>
        <button onClick={this.handleClick}>Opportunity</button>
        <button onClick={this.handleClick}>Spirit</button>
        <h1>{this.state.count}</h1>
      </div>
        )
  }

}

export default Button;
