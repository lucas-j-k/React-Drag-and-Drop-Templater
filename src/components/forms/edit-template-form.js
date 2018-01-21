import React, { Component } from 'react';



class EditTemplateForm extends Component {

  constructor(props){
    super(props)
  }

  render() {
    return (
      <form>
        <h2>Edit Template</h2>
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

export default EditTemplateForm;
