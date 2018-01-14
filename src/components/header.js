import React, { Component } from 'react';

class Header extends Component {
  render(){
    //Map through the navigation prop array, to generate nav links. We use the
    //array index passed to map as a key, as we don't have a set id for each item.
    const navLinks = this.props.navigation.map((navLink, index)=>{
      return <NavLink url={navLink.url} anchor={navLink.anchor} key={index} />
    });

    return (
        <header className="row" >
          <nav className="navbar navbar-dark bg-dark col navbar-expand-md">
            <ul className="navbar-nav">
              {navLinks}
            </ul>
          </nav>
        </header>
    )
  }
}


function NavLink(props){
  return (
    <li className="nav-item">
      <a href={props.url} className="nav-link">{props.anchor}</a>
    </li>
  )
}


export default Header;
