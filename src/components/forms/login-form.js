import React, { Component } from 'react';



class LoginForm extends Component {

  render() {
    return (
      <form className="user-form">
        <h2 className="user-form__heading form__heading">Login</h2>
        <div className="form-group user-form__form-group">
          <label for="email" className="user-form__label form__label">Email</label>
          <input type="email" name="email" className="user-form__input form__input" />
        </div>
        <div className="form-group user-form__form-group">
          <label for="password" className="user-form__label form__label" >Password</label>
          <input type="password" name="password" className="user-form__input form__input" />
        </div>
        <div className="form-group user-form__form-group">
          <input type="submit" name="submit" className="user-form__submit form__submit button button--positive" />
        </div>

      </form>
    )
  }

}

export default LoginForm;
