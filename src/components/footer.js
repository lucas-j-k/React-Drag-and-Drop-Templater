import React, { Component } from 'react';

class Footer extends Component {
  render(){
    console.log("Footer rendered: ", Date());
    return (
      <div style={{backgroundColor: 'cadetblue'}}>
        "This is the footer"
      </div>
    )
  }
}

export default Footer;
