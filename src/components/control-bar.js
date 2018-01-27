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
    this.props.openCreateTemplateForm();
  }


  render(){
    return (
      <div className="control-bar">
        <div className="control-bar__button-tray">
          <button className="control-bar__button button button--negative" onClick={(e) => this.handleClearClick(e)}>Clear</button>
          <button className="control-bar__button button button--positive" onClick={(e) => this.openCreateTemplateForm()}>Add Template</button>
        </div>
      </div>
    )
  }

}

export default ControlBar;
