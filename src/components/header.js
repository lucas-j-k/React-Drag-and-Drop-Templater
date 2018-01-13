import React, { Component } from 'react';

class Header extends Component {
  render(){
    console.log("Header is rendered", Date());
    return (
      <header style={{backgroundColor: 'yellow'}}>
        "This is the site header. Nav menu and logo and user info need to be rendered in here."
      </header>
    )
  }
}

export default Header;
