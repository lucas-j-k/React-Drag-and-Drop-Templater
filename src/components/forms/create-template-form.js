import React, { Component } from 'react';



class CreateTemplateForm extends Component {

  render() {
    return (
      <form>
        <div className="form-group">
          <label for="templateLabel">Label</label>
          <input type="text" name="templateLabel" />
        </div>
        <div className="form-group">
          <label for="templateContent">Text</label>
          <textarea name="templateContent" />
        </div>
        <div className="form-group">
          <input type="submit" name="submit" />
        </div>

      </form>
    )
  }

}

export default CreateTemplateForm;
