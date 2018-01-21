import React, { Component } from 'react';

class Header extends Component {
  render(){
    //Map through the navigation prop array, to generate nav links. We use the
    //array index passed to map as a key, as we don't have a set id for each item.
    const navLinks = this.props.navigation.map((navLink, index)=>{
      return <NavLink url={navLink.url} anchor={navLink.anchor} key={index} />
    });

    return (
        <header className="header-bar" >
          <nav className="header-bar__nav">
            <ul className="header-bar__navlist">
              {navLinks}
            </ul>
          </nav>
          <div className="header-bar__user">UserName goes here</div>
        </header>
    )
  }
}


function NavLink(props){
  return (
    <li className="header-bar__navlist-item">
      <a href={props.url} className="header-bar__nav-link">{props.anchor}</a>
    </li>
  )
}


export default Header;
