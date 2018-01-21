import React, { Component } from 'react';

class ControlBar extends Component {

  constructor(props) {
    super(props)
    this.handleClearClick = this.handleClearClick.bind(this);
    this.handleCopyClick = this.handleCopyClick.bind(this);
    this.openCreateTemplateForm = this.openCreateTemplateForm.bind(this);
  }

  handleClearClick(e){
    this.props.clearComposer();
  }

  handleCopyClick(){
    this.props.populateClipboard();
  }

  openCreateTemplateForm(formName){
    this.props.openCreateTemplateForm(formName);
  }

  render(){
    return (
      <div className="row">
        <div className="col">
          <button onClick={(e) => this.handleCopyClick(e)}>Copy</button>
          <button onClick={(e) => this.handleClearClick(e)}>Clear</button>
          <button onClick={(e) => this.openCreateTemplateForm("create-template")}>Add Template</button>
        </div>
      </div>
    )
  }

}

export default ControlBar;
