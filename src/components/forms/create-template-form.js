import React, { Component } from 'react';



class CreateTemplateForm extends Component {

  render() {
    return (
      <form className="modal-form">
      <h2 className="modal-form__heading">Create a New Template</h2>
        <div className="modal-form__form-group">
          <label for="templateLabel" className="modal-form__label">Label</label>
          <input type="text" name="templateLabel" className="modal-form__input" />
        </div>
        <div className="modal-form__form-group">
          <label for="templateContent" className="modal-form__label">Text</label>
          <textarea name="templateContent" className="modal-form__input modal-form__textarea" />
        </div>
        <div className="modal-form__form-group">
          <input type="submit" name="submit" className="button button--positive modal-form__submit" />
        </div>

      </form>
    )
  }

}

export default CreateTemplateForm;
