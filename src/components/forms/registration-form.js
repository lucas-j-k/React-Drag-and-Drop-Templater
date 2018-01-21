import React, { Component } from 'react';



class RegistrationForm extends Component {

  render() {
    return (
      <form>
        <div className="form-group">
          <label for="firstName">First Name</label>
          <input type="text" name="firstName" />
        </div>
        <div className="form-group">
          <label for="lastName">Last Name</label>
          <input type="text" name="lastName" />
        </div>
        <div className="form-group">
          <label for="email">Email</label>
          <input type="email" name="email" />
        </div>
        <div className="form-group">
          <label for="password">Password</label>
          <input type="password" name="password" />
        </div>
        <div className="form-group">
          <input type="submit" name="submit" />
        </div>

      </form>
    )
  }

}

export default RegistrationForm;
