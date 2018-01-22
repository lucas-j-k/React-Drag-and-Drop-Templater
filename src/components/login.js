import React, { Component } from 'react';
import LoginForm from './forms/login-form';

class Login extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="body-section login-section">
        <LoginForm />
      </div>
    );
  }

}

export default Login;
