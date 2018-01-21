import React, { Component } from 'react';



class EditTemplateForm extends Component {

  constructor(props){
    super(props)
  }


  render() {
    return (
      <form>
        <h2>Edit Template - {this.props.currentlyEditing.label}</h2>
        <input type="hidden" defaultValue={this.props.currentlyEditing.id} />
        <div className="form-group">
          <label for="templateLabel">Label</label>
          <input type="text" name="templateLabel" defaultValue={this.props.currentlyEditing.label} />
        </div>
        <div className="form-group">
          <label for="templateContent">Text</label>
          <textarea name="templateContent" defaultValue={this.props.currentlyEditing.content} />
        </div>
        <div className="form-group">
          <input type="submit" name="submit" />
        </div>

      </form>
    )
  }

}

export default EditTemplateForm;
