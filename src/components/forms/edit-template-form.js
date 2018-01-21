import React, { Component } from 'react';



class EditTemplateForm extends Component {

  constructor(props){
    super(props)
  }


  render() {
    return (
      <form className="modal-form">
        <h2 className="modal-form__heading">Edit Template - {this.props.currentlyEditing.label}</h2>
        <input type="hidden" name="templateId" defaultValue={this.props.currentlyEditing.id} />
        <div className="modal-form__form-group">
          <label for="templateLabel" className="modal-form__label">Label</label>
          <input type="text" name="templateLabel" defaultValue={this.props.currentlyEditing.label} className="modal-form__input" />
        </div>
        <div className="modal-form__form-group">
          <label for="templateContent" className="modal-form__label">Text</label>
          <textarea name="templateContent" defaultValue={this.props.currentlyEditing.content} className="modal-form__input modal-form__textarea" />
        </div>
        <div className="modal-form__form-group">
          <input type="submit" name="submit" className="modal-form__submit button button--positive" />
        </div>

      </form>
    )
  }

}

export default EditTemplateForm;
