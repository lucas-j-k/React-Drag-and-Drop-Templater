import React, { Component } from 'react';



class LoginForm extends Component {

  constructor(props){
    super(props);
    this.state={
      email: "",
      password: ""
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event){
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event){
    event.preventDefault();
    let submission = {
      email: this.state.email,
      password: this.state.password
    }
    console.log(submission);
  }

  render() {
    return (
      <form className="user-form" onSubmit={this.handleSubmit}>
        <h2 className="user-form__heading form__heading">Login</h2>
        <div className="form-group user-form__form-group">
          <label htmlFor="email" className="user-form__label form__label">Email</label>
          <input type="email" name="email" className="user-form__input form__input" value={this.state.email} onChange={this.handleInputChange} />
        </div>
        <div className="form-group user-form__form-group">
          <label htmlFor="password" className="user-form__label form__label" >Password</label>
          <input type="password" name="password" className="user-form__input form__input" value={this.state.password} onChange={this.handleInputChange} />
        </div>
        <div className="form-group user-form__form-group">
          <input type="submit" name="submit" className="user-form__submit form__submit button button--positive" />
        </div>

      </form>
    )
  }

}

export default LoginForm;
