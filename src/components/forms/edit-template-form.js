import React, { Component } from 'react';



class EditTemplateForm extends Component {

  constructor(props){
    super(props);
    this.state={
      templateLabel: this.props.currentlyEditing.label,
      templateContent: this.props.currentlyEditing.content
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
      label: this.state.templateLabel,
      content: this.state.templateContent
    }
    console.log(submission);
  }


  render() {
    return (
      <form className="modal-form" onSubmit={this.handleSubmit}>
        <h2 className="modal-form__heading form__heading">Edit Template - {this.props.currentlyEditing.label}</h2>
        <input type="hidden" name="templateId" defaultValue={this.props.currentlyEditing.id} />
        <div className="modal-form__form-group form-group">
          <label htmlFor="templateLabel" className="modal-form__label form__label">Label</label>
          <input type="text" name="templateLabel" className="modal-form__input form__input" onChange={this.handleInputChange} value={this.state.templateLabel} />
        </div>
        <div className="modal-form__form-group form-group">
          <label htmlFor="templateContent" className="modal-form__label form__label">Text</label>
          <textarea name="templateContent" className="modal-form__input modal-form__textarea form__input form__textarea" onChange={this.handleInputChange} value={this.state.templateContent} />
        </div>
        <div className="modal-form__form-group form-group">
          <input type="submit" name="submit" className="modal-form__submit button button--positive form__submit" />
        </div>

      </form>
    )
  }

}

export default EditTemplateForm;
