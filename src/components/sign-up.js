import React, { Component } from 'react';
import RegistrationForm from './forms/registration-form'

class SignUp extends Component {
  
  render() {
    return (
      <div className="body-section sign-up-section">
        <RegistrationForm />
      </div>
    );
  }

}

export default SignUp;
