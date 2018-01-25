import React, { Component } from 'react';


class CreateTemplateForm extends Component {

  constructor(props){
    super(props);
    this.state={
      templateLabel: "",
      tmplateContent: ""
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
    let splitContent = this.state.templateContent.split("\n");
    let stringContent = JSON.stringify(splitContent);
    let submission = {
      "label": this.state.templateLabel,
      "content": stringContent
    }
    console.log("submission/////////.", submission);
    
  }

  render() {
    return (
      <form className="modal-form" onSubmit={this.handleSubmit}>
      <h2 className="modal-form__heading form__heading">Create a New Template</h2>
        <div className="modal-form__form-group form-group">
          <label htmlFor="templateLabel" className="modal-form__label form__label">Label</label>
          <input type="text" name="templateLabel" className="modal-form__input form__input" onChange={this.handleInputChange} value={this.state.templateLabel} />
        </div>
        <div className="modal-form__form-group form-group">
          <label htmlFor="templateContent" className="modal-form__label form__label">Text</label>
          <textarea name="templateContent" className="modal-form__input form__input modal-form__textarea form__input form__textarea" onChange={this.handleInputChange} value={this.state.templateContent} />
        </div>
        <div className="modal-form__form-group form-group">
          <input type="submit" name="submit" className="button button--positive modal-form__submit form__submit" />
        </div>

      </form>
    )
  }

}

export default CreateTemplateForm;
