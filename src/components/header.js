import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class Header extends Component {
  render(){
    return (
        <header className="header-bar" >
          <nav className="header-bar__nav">
            <ul className="header-bar__navlist">
              <li className="header-bar__navlist-item"><Link className="header-bar__nav-link" to='/'>Home</Link></li>
              <li className="header-bar__navlist-item"><Link className="header-bar__nav-link" to='/app'>App</Link></li>
              <li className="header-bar__navlist-item"><Link className="header-bar__nav-link" to='/login'>Login</Link></li>
              <li className="header-bar__navlist-item"><Link className="header-bar__nav-link" to='/sign-up'>Sign Up</Link></li>
            </ul>
          </nav>
          <div className="header-bar__user"><i className="fa fa-user-o" aria-hidden="true"></i> {this.props.user.firstName} {this.props.user.lastName} </div>
        </header>
    )
  }
}



export default Header;
