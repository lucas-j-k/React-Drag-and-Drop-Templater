import React, { Component } from 'react';



class LoginForm extends Component {

  render() {
    return (
      <form>
        <h2>Login</h2>
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

export default LoginForm;
