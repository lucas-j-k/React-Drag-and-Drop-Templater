import React, { Component } from 'react';



class RegistrationForm extends Component {

  render() {
    return (
      <form className="user-form">
        <h2 className="user-form__heading form__heading">Sign Up</h2>
        <div className="form-group user-form__form-group">
          <label for="firstName" className="user-form__label form__label">First Name</label>
          <input type="text" name="firstName" className="user-form__input form__input" />
        </div>
        <div className="form-group user-form__form-group">
          <label for="lastName" className="user-form__label form__label">Last Name</label>
          <input type="text" name="lastName" className="user-form__input form__input" />
        </div>
        <div className="form-group user-form__form-group">
          <label for="email" className="user-form__label form__label">Email</label>
          <input type="email" name="email" className="user-form__input form__input" />
        </div>
        <div className="form-group user-form__form-group">
          <label for="password" className="user-form__label form__label">Password</label>
          <input type="password" name="password" className="user-form__input form__input" />
        </div>
        <div className="form-group user-form__form-group">
          <input type="submit" name="submit" className="user-form__submit form__submit button button--positive" />
        </div>
      </form>
    )
  }

}

export default RegistrationForm;
