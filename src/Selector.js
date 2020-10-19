import React, { Component } from 'react';
// import './App.css';


class Selector extends Component {
// constructor(props){
//   super(props);
// }
  render(){
    return <div>
              <h2>Choose your rover!</h2>
                <button>Curiosity</button>
                <button>Opportunity</button>
                <button>Spirit</button>
          </div>
  }
}

export default Selector;
